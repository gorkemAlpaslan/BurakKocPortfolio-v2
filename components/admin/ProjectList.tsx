"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchProjects, deleteProject } from "@/lib/api";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bu projeyi silmek istediğinizden emin misiniz?")) {
      await deleteProject(id);
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id} className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.category}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.date}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/admin/projects/edit/${project.id}`}>
                  <Edit className="mr-2 h-4 w-4" /> Düzenle
                </Link>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(project.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Sil
              </Button>
            </div>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
