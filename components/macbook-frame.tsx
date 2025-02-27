"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion"; // Framer Motion ekliyoruz
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MacbookFrameProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  alt?: string;
  isHovered?: boolean; // Hover durumu prop olarak alınıyor
}

export default function MacbookFrame({
  className,
  image,
  alt = "Preview",
  isHovered = false, // Varsayılan false
}: MacbookFrameProps) {
  return (
    <div className={cn("relative w-[450px]", className)}>
      <div className="relative border-[8px] bg-black border-black dark:border-[#2a2a30] rounded-[12px] aspect-[16/11]">
        <div className="relative w-full h-full rounded-[4px] overflow-hidden">
          {image && (
            <motion.div
              initial={{ y: 0 }} // Başlangıç pozisyonu
              animate={isHovered ? { y: -460 } : { y: 0 }} // Hover'da yukarı kayma
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Animasyon yumuşaklığı
              className="w-full h-full"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                width={800} // Manuel genişlik belirle
                height={600} // Oranları koruyarak yüksekliği belirle
                className="object-top w-full"
                style={{ maxHeight: "unset" }} // Maskelenmeyi kaldırır
              />
            </motion.div>
          )}
        </div>
        <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-4%] h-[300px] translate-x-[-8px]" />
      </div>
    </div>
  );
}
