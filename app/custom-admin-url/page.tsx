"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectList from "@/components/admin/ProjectList";
import ProjectForm from "@/components/admin/ProjectForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, Folder, Users, BarChart } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  Admin Panel
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Button onClick={handleLogout} variant="ghost">
                Çıkış Yap
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <Button asChild>
              <Link href="/admin/projects/new">
                <PlusCircle className="mr-2 h-4 w-4" /> New Project
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Folder className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="text-2xl font-semibold">24</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Total Projects
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-10 w-10 text-green-500" />
                <div>
                  <p className="text-2xl font-semibold">1,234</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Total Users
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <BarChart className="h-10 w-10 text-purple-500" />
                <div>
                  <p className="text-2xl font-semibold">89%</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Completion Rate
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Projeler
              </h1>
              <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Projeleri Göster" : "Yeni Proje Ekle"}
              </Button>
            </div>
            {showForm ? <ProjectForm /> : <ProjectList />}
          </div>
        </div>
      </main>
    </div>
  );
}
