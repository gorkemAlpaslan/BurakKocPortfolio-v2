"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    category: "UI/UX Design",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    date: "2023-05-20",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    category: "Machine Learning",
    date: "2023-04-10",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <Button asChild>
          <Link href="/admin/projects/new">
            <PlusCircle className="mr-2 h-4 w-4" /> New Project
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.category}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
