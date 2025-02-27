"use client";

import Header from "@/components/Header";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Users,
  LinkIcon,
  ArrowRight,
  CheckCircle2,
  Users2,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import Image5 from "../../../public/image/adam.jpg";

// UI/UX Proje verisi
const projectData = {
  id: 1,
  title: "E-Learning Platform UI/UX Design",
  description:
    "Kullanıcı odaklı, erişilebilir ve etkileşimli bir online eğitim platformu tasarımı.",
  fullDescription: `Bu projede, modern eğitim ihtiyaçlarını karşılayan, kullanıcı dostu bir e-learning platformu tasarladık. Projemiz, detaylı kullanıcı araştırması ve test süreçleriyle şekillendirildi. Platform, öğrencilerin eğitim içeriklerine kolay erişimini sağlarken, eğitmenlere de içerik yönetimi için güçlü araçlar sunuyor.

Tasarım sürecimiz, kullanıcı deneyimini merkeze alan bir yaklaşımla yürütüldü. Özellikle mobil kullanım senaryoları ve erişilebilirlik standartları göz önünde bulundurularak, her kullanıcı için optimal bir deneyim hedeflendi.`,
  imageUrl: "@/renex-web.jpg",
  category: "UI/UX Tasarımı",
  client: "EduTech Inc.",
  date: "2023",
  duration: "12 Hafta",
  team: [
    "UX Araştırmacısı",
    "UI Tasarımcısı",
    "Etkileşim Tasarımcısı",
    "Frontend Geliştirici",
  ],
  deliverables: [
    "UX Araştırma Raporu",
    "Kullanıcı Akış Şemaları",
    "Wireframe'ler",
    "UI Stil Rehberi",
    "Prototip",
    "Kullanılabilirlik Test Raporu",
  ],
  technologies: ["Figma", "Adobe XD", "Maze", "Miro", "Proto.io"],
  researchMethods: [
    "Kullanıcı Görüşmeleri",
    "Anketler",
    "Rakip Analizi",
    "Kullanılabilirlik Testleri",
    "A/B Testleri",
  ],
  goals: [
    "Kullanıcı kaydı ve katılımını %40 artırmak",
    "Ders tamamlama oranlarını %60'a çıkarmak",
    "Mobil kullanımı %50 artırmak",
    "Platform kullanılabilirlik skorunu 90+ yapmak",
  ],
  results: [
    "Kullanıcı kaydında %45 artış",
    "Ders tamamlama oranlarında %65 iyileşme",
    "Mobil kullanımda %55 artış",
    "92/100 kullanılabilirlik skoru",
  ],
  process: {
    empathize: {
      title: "Empati & Araştırma",
      description:
        "Kullanıcı ihtiyaçlarını ve davranışlarını derinlemesine anlamak için kapsamlı araştırma yaptık.",
      duration: "3 Hafta",
      tasks: [
        "15 derinlemesine kullanıcı görüşmesi",
        "200+ anket yanıtı analizi",
        "5 rakip platformun detaylı analizi",
        "Kullanıcı yolculuğu haritalaması",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    define: {
      title: "Tanımlama & Analiz",
      description:
        "Araştırma bulgularını analiz ederek temel kullanıcı ihtiyaçlarını ve sorunları belirledik.",
      duration: "2 Hafta",
      tasks: [
        "Kullanıcı personaları oluşturma",
        "Sorun tespiti ve önceliklendirme",
        "Tasarım prensiplerinin belirlenmesi",
        "Başarı metriklerinin tanımlanması",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    ideate: {
      title: "Fikir Üretimi & Tasarım",
      description:
        "Belirlenen sorunlara yönelik çözümler geliştirdik ve ilk tasarım konseptlerini oluşturduk.",
      duration: "4 Hafta",
      tasks: [
        "Beyin fırtınası oturumları",
        "Çözüm önerilerinin değerlendirilmesi",
        "Wireframe'lerin oluşturulması",
        "Tasarım sisteminin geliştirilmesi",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    prototype: {
      title: "Prototipleme & Test",
      description:
        "Tasarımları interaktif prototiplere dönüştürdük ve kullanıcılarla test ettik.",
      duration: "3 Hafta",
      tasks: [
        "Hi-fi prototiplerin hazırlanması",
        "10 kullanılabilirlik testi",
        "Geri bildirimlerin analizi",
        "İterasyonların tamamlanması",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  },
  wireframes: [
    {
      title: "Ana Sayfa",
      description: "Kurs keşfi ve navigasyon yapısı",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1O1QwHRLMB1otiLMWNOgFJNQSeoThO.png",
    },
    {
      title: "Kurs Detay",
      description: "İçerik organizasyonu ve etkileşim noktaları",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Öğrenim Paneli",
      description: "İlerleme takibi ve içerik görüntüleme",
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  gallery: [
    Image5,
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=400&width=600",
  ],
  metrics: [
    {
      title: "Kullanıcı Memnuniyeti",
      value: "92%",
      change: "+15%",
      icon: Users2,
    },
    {
      title: "Görev Tamamlama",
      value: "95%",
      change: "+20%",
      icon: CheckCircle2,
    },
    {
      title: "Hedef Gerçekleşme",
      value: "88%",
      change: "+25%",
      icon: Target,
    },
  ],
  hasPrototype: true,
  hasWireframes: true,
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero section image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectData.gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: "overview", label: "Genel Bakış" },
    { id: "process", label: "Süreç" },
    { id: "userflow", label: "User Flow" },
    { id: "gallery", label: "Galeri" },
    { id: "prototype", label: "Prototype" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 dark:opacity-10" />
        <div className="container mx-auto px-4 relative">
          <Link
            href="/portfolyo"
            className="inline-flex items-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Portfolyoya Dön
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                {projectData.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-black/60 dark:text-white/60 mb-8">
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{projectData.date}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Tag className="w-4 h-4" />
                  <span>{projectData.category}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Users className="w-4 h-4" />
                  <span>{projectData.client}</span>
                </Badge>
              </div>
              <p className="text-lg text-black/80 dark:text-white/80">
                {projectData.description}
              </p>
            </motion.div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      projectData.gallery[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={`${projectData.title} - Image ${
                      currentImageIndex + 1
                    }`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Updated Tabs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 backdrop-blur-xl bg-white/5 dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                      : "bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && <OverviewTab project={projectData} />}
            {activeTab === "process" && <ProcessTab project={projectData} />}
            {activeTab === "userflow" && <UserFlowTab project={projectData} />}
            {activeTab === "gallery" && <GalleryTab project={projectData} />}
            {activeTab === "prototype" && projectData.hasPrototype && (
              <PrototypeTab project={projectData} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryTab({ project }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  }, [project.gallery.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  }, [project.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-4">
          {project.gallery.map((image, index) => {
            const sizeClasses =
              [
                "md:col-span-8 md:row-span-2",
                "md:col-span-4 md:row-span-2",
                "md:col-span-3 md:row-span-1",
                "md:col-span-3 md:row-span-1",
                "md:col-span-6 md:row-span-2",
                "md:col-span-6 md:row-span-2",
                "md:col-span-4 md:row-span-2",
                "md:col-span-4 md:row-span-1",
                "md:col-span-4 md:row-span-1",
                "md:col-span-8 md:row-span-2",
                "md:col-span-6 md:row-span-2",
                "md:col-span-6 md:row-span-2",
              ][index] || "md:col-span-4 md:row-span-1 ";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${sizeClasses} relative  rounded-2xl overflow-hidden group cursor-pointer`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrev={handlePrevious}
        currentImage={selectedImage}
        images={project.gallery}
        onThumbnailClick={setSelectedImage}
      >
        {selectedImage !== null && (
          <Image
            src={project.gallery[selectedImage] || "/placeholder.svg"}
            alt={`Image ${selectedImage + 1}`}
            fill
            className="object-none rounded-2xl"
          />
        )}
      </Modal>
    </>
  );
}

function OverviewTab({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {project.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 3 === 0 ? -20 : index % 3 === 2 ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6 flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-black/5 dark:bg-white/5">
              <metric.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm  text-black/60 dark:text-white/60">
                {metric.title}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Proje Hakkında</h2>
            <p className="text-black/80 dark:text-white/80 whitespace-pre-line">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Araştırma Metodları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.researchMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-black/80 dark:text-white/80">
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Hedefler</h3>
            <div className="grid gap-4">
              {project.goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4"
                >
                  <Target className="w-5 h-5 text-purple-500 mt-0.5" />
                  <span className="text-black/80 dark:text-white/80">
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Sonuçlar</h3>
            <div className="grid gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-black/80 dark:text-white/80">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Teslim Edilenler</h3>
            <ul className="space-y-2 text-black/60 dark:text-white/60">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Teknolojiler</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Takım</h3>
            <ul className="space-y-2 text-black/60 dark:text-white/60">
              {project.team.map((member, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Proje Süresi</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-black/60 dark:text-white/60">
                Başlangıç
              </span>
              <span className="text-black/60 dark:text-white/60">Bitiş</span>
            </div>
            <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-full" />
            </div>
            <p className="text-center mt-2 text-black/60 dark:text-white/60">
              {project.duration}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessTab({ project }) {
  const steps = ["empathize", "define", "ideate", "prototype"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Process Steps Grid - Yaratıcı Tasarım */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => {
          const processStep = project.process[step];
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {processStep.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  {processStep.description}
                </p>
                <ul className="space-y-2">
                  {processStep.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 hidden lg:block"></div>
      </div>

      {/* Process Details */}
      <div className="space-y-32">
        {steps.map((step, index) => {
          const processStep = project.process[step];
          return (
            <motion.div
              key={step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "" : "md:order-2"}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-black/60 dark:text-white/60">
                      {String(index + 1).padStart(2, "0")}.{" "}
                      {processStep.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {processStep.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80 mb-6">
                    {processStep.description}
                  </p>
                  <div className="grid gap-4">
                    {processStep.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                        className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4 transform transition-all duration-300 hover:scale-105"
                      >
                        <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5" />
                        <span className="text-black/80 dark:text-white/80">
                          {task}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 0 ? "" : "md:order-1"}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <Image
                      src={processStep.image || "/placeholder.svg"}
                      alt={processStep.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-semibold mb-2">
                        {processStep.title}
                      </h4>
                      <p className="text-sm">{processStep.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function UserFlowTab({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        User Flow Diagram
      </h2>
      <div className="bg-white dark:bg-[#030303] rounded-xl shadow-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ayRHIuXg1QLDpjAleRlhuMjmztat7d.png"
          alt="User Flow Diagram"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
      <div className="grid gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black/5 dark:bg-white/5 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Flow Description</h3>
          <p className="text-black/80 dark:text-white/80">
            This user flow diagram illustrates the complete journey from service
            selection to confirmation. Users start by selecting a service, then
            enter their details. The system validates the input and processes
            the request. After approval, the system generates a report and sends
            a confirmation.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PrototypeTab({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/10 dark:bg-white/10 backdrop-blur-sm">
          <iframe
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
            asChild
          >
            <a
              href="https://www.figma.com/file/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <LinkIcon className="w-4 h-4" />
              <span>Figma'da Görüntüle</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
