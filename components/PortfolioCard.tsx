"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MacbookFrame from "@/components/macbook-frame";
import PhoneFrame from "@/components/iphone-frame";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  year?: string;
  client: string;
  deviceType?: "macbook" | "iphone";
}

let activeCardId: string | null = null; // Aynı anda sadece bir kart hover olacak

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  category,
  year,
  client,
  deviceType = "macbook",
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const cardId = useRef(`card-${Math.random()}`); // Kart için benzersiz ID

  // **Desktop için klasik hover**
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // **Mobilde ilk tab hover, ikinci tab yönlendirme**
  const handleTouch = () => {
    if (activeCardId === cardId.current) {
      // Eğer zaten hover durumundaysa, ikinci dokunuş yönlendirsin
      window.location.href = link;
    } else {
      // İlk dokunuş hover açsın ve diğer kartların hover'ını kapatsın
      activeCardId = cardId.current;
      setIsHovered(true);

      // Başka bir yere dokunursa hover'ı kapat
      const closeHover = () => {
        setIsHovered(false);
        activeCardId = null;
        document.removeEventListener("touchstart", closeHover);
      };
      document.addEventListener("touchstart", closeHover, { once: true });
    }
  };

  return (
    <Link href={link} passHref legacyBehavior>
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-[600px] h-[350px] rounded-3xl overflow-hidden mx-auto flex flex-col bg-white/0 dark:bg-white/0 hover:bg:white/20 dark:hover:bg-white/[0.03]
                border border-gray-200 hover:border-gray-400 dark:border-white/10 dark:hover:border-white/10 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouch} // Mobilde dokunma işlemi
        animate={isHovered ? "hovered" : "initial"}
      >
        <div className="p-6 relative h-full w-full flex flex-col items-center">
          {/* Başlık ve Badge'ler */}
          <div className="flex flex-col items-center">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-4 text-center ${
                isHovered
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  : "text-black dark:text-white/60"
              }`}
            >
              {title}
            </h3>

            {/* Yıl ve Kategori */}
            <motion.div
              className="flex items-center justify-center flex-wrap gap-2 mb-4"
              variants={{
                initial: { y: 0, opacity: 1 },
                hovered: { y: 20, opacity: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {year && (
                <span className="text-sm text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">
                  {year}
                </span>
              )}
              {category && (
                <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">
                  {category}
                </span>
              )}
              {client && (
                <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">
                  {client}
                </span>
              )}
            </motion.div>
          </div>

          {/* Ekran İçeriği */}
          <motion.div
            className="absolute left-0 right-0 bottom-0 overflow-hidden flex justify-center"
            variants={{
              initial: { y: 100, zIndex: 1 },
              hovered: { y: 60, zIndex: 2 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {deviceType === "macbook" && (
              <MacbookFrame
                image={image}
                alt={title}
                className="transform scale-[0.95]"
                isHovered={isHovered}
              />
            )}

            {deviceType === "iphone" && (
              <PhoneFrame
                image={image}
                alt={title}
                className="transform scale-[0.95]"
                isHovered={isHovered}
              />
            )}
          </motion.div>

          {/* Ok ikonu ile yönlendirme butonu */}
          <motion.div
            className="absolute bottom-8 right-8 z-10"
            variants={{
              initial: { y: 100, opacity: 1 },
              hovered: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronRight size={24} className="text-gray-500" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
