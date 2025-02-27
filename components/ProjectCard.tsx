"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MacbookFrame from "@/components/macbook-frame";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[]; // Eski kartta kullanılan tag'leri ekliyoruz
  year?: string; // Eski kartta kullanılan yıl bilgisini ekliyoruz
}

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  tags = [], // Varsayılan olarak boş bir dizi
  year, // Yıl bilgisi
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[600px] h-[350px] rounded-3xl overflow-hidden mx-auto flex flex-col 
             shadow-xl transition-shadow "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? "hovered" : "initial"}
      style={{
        backgroundColor: isHovered ? "white" : "transparent",
      }}
      variants={{
        initial: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
        hovered: { boxShadow: "0px 0px 80px rgba(0,0,0,0.08)" },
      }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <div className="p-8 relative h-full w-full flex flex-col items-center">
        {/* Başlık ve Badge'ler */}
        <div className="flex flex-col items-center">
          <h3
            className={`text-2xl md:text-3xl font-bold mb-4 text-center ${
              isHovered
                ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "text-[#140f25]"
            }`}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {year && (
              <span className="text-sm text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
                {year}
              </span>
            )}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-2 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.p
          className="text-sm md:text-base text-gray-600 max-w-[80%] text-center"
          variants={{
            initial: { y: 0, opacity: 1 },
            hovered: { y: 20, opacity: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute left-0 right-0 bottom-0 overflow-hidden flex justify-center"
          variants={{
            initial: { y: 100, zIndex: 1 },
            hovered: { y: 40, zIndex: 2 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MacbookFrame
            image={image}
            alt={title}
            className="transform scale-[0.95]"
            isHovered={isHovered} // Hover durumunu buraya iletiyoruz
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 z-10"
          variants={{
            initial: { y: 100, opacity: 1 },
            hovered: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={link}>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_0px_60px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_60px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer ${
                isHovered
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  : "bg-[#52a1f1] hover:bg-[#0071E3]"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
