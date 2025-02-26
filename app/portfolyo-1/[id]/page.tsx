"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  client: string;
  date: string;
  team: string[];
  deliverables: string[];
  technologies: string[];
  goals: string[];
  results: string[];
  figmaEmbedUrl: string;
  images: string[];
}

// Proje verilerini ayrı bir dosyaya taşıyabilirsiniz
const projects: Project[] = [
  {
    id: 1,
    title: "Turkiz Hotel Web Design",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "Turkiz Hotels",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl: "https://www.figma.com/proto/ASD123456789/example-prototype",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 2,
    title: "E-ticaret ",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.
 

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 3,
    title: "E-ticaret Yeniden Tasarımı",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 4,
    title: "E-ticaret Yeniden Tasarımı",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 5,
    title: "E-ticaret Yeniden Tasarımı",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 6,
    title: "E-ticaret Yeniden Tasarımı",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 7,
    title: "E-ticaret Yeniden Tasarımı",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    fullDescription: `Bu projede, müşterinin mevcut e-ticaret platformunu analiz ederek kullanıcı deneyimini iyileştirmeyi ve dönüşüm oranlarını artırmayı hedefledik.

Kullanıcı araştırmaları ve analitik verilere dayanarak, satın alma sürecindeki temel sorunları tespit ettik ve yeni bir tasarım yaklaşımı geliştirdik.`,
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    client: "XYZ E-ticaret",
    date: "2023",
    team: ["UI/UX Designer", "Frontend Developer", "Project Manager"],
    deliverables: ["UX Research", "Wireframes", "UI Design", "Prototype"],
    technologies: ["Figma", "Adobe XD", "React", "TailwindCSS"],
    goals: [
      "Dönüşüm oranını %25 artırmak",
      "Mobil kullanıcı deneyimini iyileştirmek",
      "Sepet terk oranını azaltmak",
    ],
    results: [
      "Dönüşüm oranında %30 artış",
      "Mobil kullanımda %40 artış",
      "Sepet terk oranında %20 azalma",
    ],
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];

function LoadingState() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white pt-32">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white pt-32">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Proje Bulunamadı</h1>
        <p className="text-black/60 dark:text-white/60 mb-8">
          Aradığınız proje mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link
          href="/portfolyo"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Portfolyoya Dön
        </Link>
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const foundProject = projects.find((p) => p.id === Number(params.id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        setError("Proje bulunamadı");
      }
    } catch (err) {
      setError("Bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  }, [params.id]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Link
            href="/portfolyo"
            className="inline-flex items-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Portfolyoya Dön
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-black/60 dark:text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
            </div>
            <p className="text-lg text-black/80 dark:text-white/80">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Sol Kolon - Proje Bilgileri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-1"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Teslim Edilenler
                  </h3>
                  <ul className="space-y-2 text-black/60 dark:text-white/60">
                    {project.deliverables.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Teknolojiler</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-sm text-black/60 dark:text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Takım</h3>
                  <ul className="space-y-2 text-black/60 dark:text-white/60">
                    {project.team.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sağ Kolon - Proje Detayları */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-2"
            >
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-6">Proje Hakkında</h2>
                <p className="whitespace-pre-line text-black/80 dark:text-white/80">
                  {project.fullDescription}
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Hedefler</h3>
                <ul className="space-y-2 text-black/80 dark:text-white/80">
                  {project.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Sonuçlar</h3>
                <ul className="space-y-2 text-black/80 dark:text-white/80">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Figma Prototype */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Prototype</h2>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
              <iframe
                src={project.figmaEmbedUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
