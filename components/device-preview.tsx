"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  device: "iphone" | "macbook";
}

const projects: Project[] = [
  {
    id: 1,
    title: "DGTLFACE",
    subtitle: "UI/UX Design & Development",
    image: "/image/dgtl.jpg",
    device: "iphone",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Web Design & Development",
    image: "/image/turkiz.jpg",
    device: "macbook",
  },
  {
    id: 3,
    title: "DGTLFACE",
    subtitle: "Mobile Application Design",
    image: "/image/dgtl.jpg",
    device: "iphone",
  },
  {
    id: 4,
    title: "Dashboard Design",
    subtitle: "Admin Panel Interface",
    image: "/placeholder.svg?height=800&width=1200",
    device: "macbook",
  },
];

interface DevicePreviewProps {
  currentProjectIndex: number;
  offsetY?: number; // Dikey pozisyon için offset
}

export default function DevicePreview({
  currentProjectIndex,
  offsetY = 0,
}: DevicePreviewProps) {
  const currentProject = projects[currentProjectIndex];

  const deviceVariants = {
    initial: {
      opacity: 0,
      y: 200, // giriş
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: offsetY, // görünüş
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: 200, // çıkış
      scale: 0.98,
      transition: { duration: 0.5, ease: [0.6, 0.1, 0.1, 0.99] }, // Daha hızlı gidiş
    },
  };

  if (currentProject.device === "iphone") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          variants={deviceVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, ease: [0.3, 0.7, 0.1, 0.99] }}
          className="flex justify-center items-center w-full h-full"
        >
          {/* iPhone 15 Pro çerçevesi */}
          <div className="relative w-[220px] h-[440px]  rounded-[32px] shadow-3xl border-[8px] bg-black border-black dark:border-[#2a2a30] ">
            {/* Dynamic Island (Test için kırmızı renk) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center z-50">
              <div className="w-[60px] h-[16px] bg-black rounded-full opacity-100" />
            </div>
            {/* Ekran içeriği */}
            <div className="relative w-full h-full overflow-hidden rounded-[24px]">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>
            {/* iPhone detayları */}
            <div className="absolute right-[-10px] top-[90px] w-[2px] h-[30px]  bg-black dark:bg-[#2a2a30] rounded-r-xl" />
            <div className="absolute right-[-10px] top-[130px] w-[2px] h-[30px] bg-black dark:bg-[#2a2a30] rounded-r-xl" />
            <div
              className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-3%] h-[300px] translate-x-[-8px] 
  bg-gradient-to-t from-white via-white/75 to-white/0 dark:from-black dark:via-black/75 dark:to-black/0"
            />{" "}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentProject.id}
        variants={deviceVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        {/* MacBook çerçevesi */}
        <div className="relative w-[500px] ">
          {/* Çerçeve ışık efekti kaldırıldı */}
          {/* Ekran */}
          <div className="relative border-[8px] bg-black border-black dark:border-[#2a2a30]  rounded-[12px]  aspect-[16/10] ">
            {/* Ekran içeriği */}
            <div className="relative w-full h-full rounded-[4px] overflow-hidden">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-4%] h-[300px] translate-x-[-8px] bg-gradient-to-t from-white via-white/75 to-white/0 dark:from-black dark:via-black/75 dark:to-black/0 " />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
