"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filter, Search, ArrowRight } from "lucide-react";
import projects from "@/datas/Projects";
import PortfolioCard from "@/components/PortfolioCard";

// Proje verileri

// Kategori filtreleri
const categories = [
  "Tümü",
  "Logo Tasarımı",
  "Sosyal Medya Tasarımı",
  "UI/UX Tasarımı",
  "Grafik Tasarım",
  "Ambalaj Tasarımı",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Projeleri filtrele
  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "Tümü" || project.category === selectedCategory;
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 relative">
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Portfolyo
            </h1>
            <p className="text-lg text-black/70 dark:text-white/70 mb-8">
              Logo tasarımından UI/UX'e, sosyal medya içeriklerinden ambalaj
              tasarımına kadar geniş bir yelpazede yaratıcı çözümler sunuyorum.
              Her proje, markanızın benzersiz kimliğini yansıtmak ve hedef
              kitlenizle güçlü bir bağ kurmak için özenle tasarlanmıştır.
            </p>
          </motion.div>

          {/* Filtreler */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 backdrop-blur-xl bg-white/5 dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 ">
            {/* Kategori Filtreleri */}
            <div className="flex items-center gap-2 overflow-x-auto w-full rounded-full md:w-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-black/60 dark:text-white/60" />
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all  ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                        : "bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Arama */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/40 dark:text-white/40 " />
              <input
                type="text"
                placeholder="Projelerde ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:border-black/20 dark:focus:border-white/20 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <PortfolioCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.imageUrl}
                  link={`/portfolyo/${project.id}`}
                  category={project.category} // category bilgisi
                  year={project.year} // yıl bilgisi
                  deviceType={project.deviceType || "macbook"} // Projeye özel deviceType eksisi >>> " "
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-black/60 dark:text-white/60">
                Arama kriterlerinize uygun proje bulunamadı.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Tümü");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Tüm projeleri göster
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
