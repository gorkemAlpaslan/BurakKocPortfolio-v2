"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import { fetchProject } from "@/lib/api";

export default function EditProjectPage({ params }) {
  const [project, setProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadProject = async () => {
      const data = await fetchProject(params.id);
      setProject(data);
    };
    loadProject();
  }, [params.id]);

  if (!project) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Projeyi Düzenle
      </h1>
      <ProjectForm project={project} />
    </div>
  );
}
