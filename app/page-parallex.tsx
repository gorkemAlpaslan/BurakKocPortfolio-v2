"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "../components/Header";
import Link from "next/link";
import DevicePreview from "@/components/device-preview";
import { useState, useEffect } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { useMotionValue } from "framer-motion";
import { useSpring } from "framer-motion";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// 🎨 ElegantShape componentini buraya dahil ettik
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  mouseX,
  mouseY,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  mouseX: any;
  mouseY: any;
}) {
  const uniqueFactor = Math.random() * 0.5 + 0.2; // 0.2 ile 0.7 arasında rastgele faktör

  // Hareketi yumuşak hale getiren motion değerleri
  const x = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latest: number) => {
      x.set(latest * uniqueFactor);
    });
    const unsubscribeY = mouseY.onChange((latest: number) => {
      y.set(latest * uniqueFactor);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, uniqueFactor, x, y]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("absolute", className)}
      style={{ x, y }} // Mouse hareketiyle değişen pozisyon
    >
      <motion.div
        animate={{ y: [0, 15, -15, 0], x: [-5, 5, -5], rotate: [0, -2, 2, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px]",
            "shadow-[0px_32px_0_rgba(255,255,255,1)] dark:shadow-[0px_32px_0_rgba(0,0,0,1)]",
            "after:absolute",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}
// 🚀 Ana Sayfa (Home) Componenti
export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Mouse hareketleri için motion değerleri
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normalizedX = (event.clientX - centerX) / centerX;
      const normalizedY = (event.clientY - centerY) / centerY;

      mouseX.set(normalizedX * 100);
      mouseY.set(normalizedY * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-white dark:bg-[#030303]">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        {/* 🎨 Arka plan şekilleri */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <ElegantShape
            delay={0.3}
            width={400}
            height={100}
            rotate={12}
            gradient="from-indigo-500/[0.5]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <ElegantShape
            delay={0.5}
            width={300}
            height={80}
            rotate={-15}
            gradient="from-transparent to-rose-500/[0.4]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <ElegantShape
            delay={0.4}
            width={200}
            height={60}
            rotate={-8}
            gradient="from-violet-500/[0.3]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </div>

        {/* Ana içerik konteyneri */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center relative">
          {/* Cihaz animasyon alanı - z-index: 10 */}
          <div className="relative w-full h-[35vh] mb-8">
            <div className="absolute inset-0">
              <DevicePreview
                currentProjectIndex={currentProjectIndex}
                offsetY={120}
              />
            </div>
          </div>

          {/* Metin alanı - z-index: 20 */}
          <div className="text-center relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-black dark:text-white">
                Selam Ben
              </span>
              <br />
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3, // 3 saniyede bir renk değişimi
                  repeat: Infinity, // Sonsuz loop
                  ease: "easeInOut",
                }}
                className={cn(
                  "bg-clip-text text-transparent",
                  "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400",
                  "animate-gradient",
                  pacifico.className
                )}
                style={{
                  backgroundSize: "200% 100%", // Gradient’in hareket etmesi için gerekli
                  display: "inline-block", // Animasyonun düzgün çalışmasını sağlar
                }}
              >
                Burak
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-black/80 dark:text-white/80 mb-8"
            >
              Grafik - UI/UX Tasarımcıyım
            </motion.p>
            {/* Butonlar */}
            <div className="flex items-center justify-center gap-4">
              <Link href="/portfolyo">
                <NeonButton variant="secondary">Portfolyo</NeonButton>
              </Link>
              <Link href="/iletisim">
                <NeonButton>Şimdi Ara</NeonButton>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-50 py-6">
        <div className="flex items-center justify-center space-x-8">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white  transition-colors duration-300"
          >
            Instagram
          </Link>
          <Link
            href="https://behance.net"
            target="_blank"
            className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            Behance
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
}
