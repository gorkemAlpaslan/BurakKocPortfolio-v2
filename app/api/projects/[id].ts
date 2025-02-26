import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "projects.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

const readProjects = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(jsonData);
};

const writeProjects = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const { title, description, category, isPublished } = req.body;
        const projects = readProjects();
        const projectIndex = projects.findIndex((p) => p.id === id);

        if (projectIndex === -1) {
          return res.status(404).json({ error: "Project not found" });
        }

        // Dosya yükleme işlemi (gerçek uygulamada daha güvenli hale getirilmeli)
        let newImages = [];
        if (req.files && Array.isArray(req.files)) {
          newImages = await Promise.all(
            req.files.map(async (file) => {
              const fileName = `${Date.now()}-${file.name}`;
              const filePath = path.join(uploadsDir, fileName);
              await fs.promises.writeFile(filePath, file.data);
              return `/uploads/${fileName}`;
            })
          );
        }

        projects[projectIndex] = {
          ...projects[projectIndex],
          title,
          description,
          category,
          isPublished,
          images: [...projects[projectIndex].images, ...newImages],
          updatedAt: new Date().toISOString(),
        };

        writeProjects(projects);
        res.status(200).json(projects[projectIndex]);
      } catch (error) {
        res.status(500).json({ error: "Error updating project" });
      }
      break;

    case "DELETE":
      try {
        const projects = readProjects();
        const projectIndex = projects.findIndex((p) => p.id === id);

        if (projectIndex === -1) {
          return res.status(404).json({ error: "Project not found" });
        }

        // Proje ile ilişkili dosyaları sil
        projects[projectIndex].images.forEach((imagePath) => {
          const fullPath = path.join(process.cwd(), "public", imagePath);
          if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
          }
        });

        projects.splice(projectIndex, 1);
        writeProjects(projects);

        res.status(200).json({ message: "Project deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Error deleting project" });
      }
      break;

    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
