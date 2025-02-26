import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const usersFilePath = path.join(process.cwd(), "data", "users.json");

const readUsers = () => {
  if (!fs.existsSync(usersFilePath)) {
    return [];
  }
  const jsonData = fs.readFileSync(usersFilePath, "utf8");
  return JSON.parse(jsonData);
};

// ✅ Next.js App Router için POST metodu doğru şekilde export ediliyor!
export async function POST(req: Request) {
  try {
    console.log("✅ API'ye POST isteği geldi.");

    const { email, password } = await req.json();
    console.log("📩 Gelen veriler:", { email, password });

    const users = readUsers();
    console.log("📂 Kullanıcı listesi:", users);

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("✅ Kullanıcı doğrulandı:", user);
      return NextResponse.json(
        { success: true, user: { id: user.id, email: user.email } },
        { status: 200 }
      );
    } else {
      console.log("❌ Kullanıcı bulunamadı veya şifre yanlış.");
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("🔥 API Hatası:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
