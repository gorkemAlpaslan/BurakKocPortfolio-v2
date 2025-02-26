"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, FolderOpen, Settings, LogOut } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/admin" },
  { icon: FolderOpen, label: "Projects", href: "/admin/projects" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/admin/login");
  };

  return (
    <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen p-4">
      <nav className="space-y-8">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 w-full"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
