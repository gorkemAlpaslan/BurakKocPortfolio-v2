import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "projects.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

// ✅ Uploads klasörünü kontrol et, yoksa oluştur
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// ✅ Veri dosyasını oku
const readProjects = () => {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(jsonData);
};

// ✅ Veri dosyasına yaz
const writeProjects = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// ✅ GET: Tüm projeleri getir
export async function GET() {
    try {
        const projects = readProjects();
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
    }
}

// ✅ POST: Yeni proje ekle
export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const category = formData.get("category");
        const isPublished = formData.get("isPublished") === "true";

        // ❌ Eksik alanları kontrol et
        if (!title || !description || !category) {
            return NextResponse.json({ error: "Tüm alanları doldurun." }, { status: 400 });
        }

        // ✅ Dosya yükleme işlemi
        let images = [];
        const files = formData.getAll("images");

        for (const file of files) {
            const fileExt = file.name.split('.').pop().toLowerCase();
            const allowedExt = ["jpg", "jpeg", "png", "gif"];

            if (!allowedExt.includes(fileExt)) {
                return NextResponse.json({ error: "Geçersiz dosya formatı." }, { status: 400 });
            }

            const fileName = `${Date.now()}-${file.name}`;
            const filePath = path.join(uploadsDir, fileName);
            const fileBuffer = Buffer.from(await file.arrayBuffer());
            fs.writeFileSync(filePath, fileBuffer);

            images.push(`/uploads/${fileName}`);
        }

        // ✅ Yeni projeyi kaydet
        const projects = readProjects();
        const newProject = { id: Date.now(), title, description, category, isPublished, images };
        projects.push(newProject);
        writeProjects(projects);

        return NextResponse.json({ success: true, project: newProject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Proje eklenirken hata oluştu." }, { status: 500 });
    }
}
