"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filter, Search, ArrowRight } from "lucide-react";

// Proje verileri
const projects = [
  {
    id: 1,
    title: "Eco Friendly Branding",
    description:
      "Sürdürülebilir bir marka için logo ve kurumsal kimlik tasarımı.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Logo Tasarımı",
    client: "Green Co.",
    year: "2023",
    tags: ["Logo", "Branding", "Sürdürülebilirlik"],
  },
  {
    id: 2,
    title: "Tech Startup Sosyal Medya Kampanyası",
    description:
      "Yenilikçi bir teknoloji şirketi için Instagram ve LinkedIn kampanyası.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Sosyal Medya Tasarımı",
    client: "InnoTech",
    year: "2023",
    tags: ["Sosyal Medya", "Dijital Pazarlama", "Tech"],
  },
  {
    id: 3,
    title: "E-ticaret Mobil Uygulama UI/UX",
    description:
      "Kullanıcı deneyimini optimize eden bir e-ticaret mobil uygulaması tasarımı.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Tasarımı",
    client: "ShopEase",
    year: "2022",
    tags: ["UI/UX", "Mobile App", "E-commerce"],
  },
  {
    id: 4,
    title: "Minimalist Poster Serisi",
    description: "Klasik filmleri temsil eden minimalist poster koleksiyonu.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Grafik Tasarım",
    client: "CinemaArt Gallery",
    year: "2023",
    tags: ["Poster", "Minimalizm", "Film"],
  },
  {
    id: 5,
    title: "Organik Gıda Ambalaj Tasarımı",
    description: "Çevre dostu malzemelerle üretilen organik gıda ambalajları.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Ambalaj Tasarımı",
    client: "NatureBite",
    year: "2022",
    tags: ["Ambalaj", "Organik", "Sürdürülebilirlik"],
  },
  {
    id: 6,
    title: "Fintech Dashboard UI",
    description:
      "Kullanıcı dostu ve veri odaklı finans yönetim paneli arayüzü.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Tasarımı",
    client: "FinanceFlow",
    year: "2023",
    tags: ["UI/UX", "Dashboard", "Fintech"],
  },
];

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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 dark:opacity-10" />
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 backdrop-blur-xl bg-white/5 dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10">
            {/* Kategori Filtreleri */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-black/60 dark:text-white/60" />
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/40 dark:text-white/40" />
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
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

// Proje Kartı Komponenti
function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/portfolyo/${project.id}`} className="block group">
        <div className="relative bg-white/5 dark:bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 border border-black/10 dark:border-white/10 hover:border-purple-500/30">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black dark:from-[#030303] to-transparent opacity-60" />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-full">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                {project.title}
              </h3>
              <span className="text-sm text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
                {project.year}
              </span>
            </div>

            <p className="text-black/80 dark:text-white/80 mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-sm px-2 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
