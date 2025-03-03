"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import projects from "@/datas/Projects";
import { OverviewTab } from "@/components/portfolio/OverviewTab";
import { ProcessTab } from "@/components/portfolio/ProcessTab";
import { UserFlowTab } from "@/components/portfolio/UserFlowTab";
import { GalleryTab } from "@/components/portfolio/GalleryTab";
import { PrototypeTab } from "@/components/portfolio/PrototypeTab";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFrameExpanded, setIsFrameExpanded] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Proje verisini ID'ye göre bul
  const project = projects.find((p) => p.id === Number.parseInt(params.id));

  if (!project || !project.projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Proje bulunamadı
      </div>
    );
  }

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

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) return;

      autoScrollIntervalRef.current = setInterval(() => {
        if (frame && isAutoScrolling) {
          const isAtBottom =
            frame.scrollTop + frame.clientHeight >= frame.scrollHeight;
          if (isAtBottom) {
            frame.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            frame.scrollBy({ top: 2, behavior: "auto" });
          }
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    const handleMouseEnter = () => {
      setIsAutoScrolling(false);
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      setIsAutoScrolling(true);
      startAutoScroll();
    };

    const handleScroll = () => {
      const scrollPercentage =
        (frame.scrollTop / (frame.scrollHeight - frame.clientHeight)) * 100;
      setIsFrameExpanded(scrollPercentage > 5); // Frame'in %5'inden fazla scroll edildiğinde genişlet
    };

    frame.addEventListener("mouseenter", handleMouseEnter);
    frame.addEventListener("mouseleave", handleMouseLeave);
    frame.addEventListener("scroll", handleScroll);

    setTimeout(startAutoScroll, 1000);

    return () => {
      frame.removeEventListener("mouseenter", handleMouseEnter);
      frame.removeEventListener("mouseleave", handleMouseLeave);
      frame.removeEventListener("scroll", handleScroll);
      stopAutoScroll();
    };
  }, [isAutoScrolling]);

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
      <section className="pt-32 w-screen h-screen pb-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 dark:opacity-10" />
        <div className="container mx-auto gap-4 px-4 relative">
          <Link
            href="/portfolyo"
            className="absolute top-0 left-16  inline-flex items-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Portfolyoya Dön
          </Link>

          <div className="flex min-h-screen flex-col gap-4 items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {project.title}
            </h1>
            <div
              className={`transition-all duration-500 ease-in-out ${
                isFrameExpanded
                  ? "opacity-0 translate-y-full"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex flex-wrap justify-center gap-4 text-black/60 dark:text-white/60 mb-4">
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{project.projectData.date}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Tag className="w-4 h-4" />
                  <span>{project.projectData.category}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                >
                  <Users className="w-4 h-4" />
                  <span>{project.projectData.client}</span>
                </Badge>
              </div>
              <p className="text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Frame with Scrollable Content */}
            <div
              className={`w-full max-w-[1000px] mx-auto border-[1px] border-white/35 rounded-t-[26px] transition-all duration-500 ease-in-out ${
                isFrameExpanded
                  ? "max-h-[1000px] aspect-video -translate-y-18 scale-[1.15]"
                  : "max-h-[600px]"
              }`}
            >
              <div
                ref={frameRef}
                className="relative w-full h-screen aspect-[16/9] rounded-[24px] border-[8px] bg-black dark:bg-[#19191e] border-black dark:border-[#19191e] overflow-y-auto"
              >
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
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
            {activeTab === "overview" && (
              <OverviewTab project={project.projectData} />
            )}
            {activeTab === "process" && (
              <ProcessTab project={project.projectData} />
            )}
            {activeTab === "userflow" && (
              <UserFlowTab project={project.projectData} />
            )}
            {activeTab === "gallery" && (
              <GalleryTab project={project.projectData} />
            )}
            {activeTab === "prototype" && project.projectData.hasPrototype && (
              <PrototypeTab project={project.projectData} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
