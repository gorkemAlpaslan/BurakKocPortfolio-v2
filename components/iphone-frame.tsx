"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Fullscreen } from "lucide-react";

interface PhoneFrameProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  alt?: string;
  isHovered?: boolean;
}

export default function PhoneFrame({
  className,
  image,
  alt = "Preview",
  isHovered = false,
}: PhoneFrameProps) {
  return (
    //<div className="relative border-[12px] border-black bg-white rounded-[40px] scale-[0.7] aspect-[2/1]">
    <div className={cn("relative w-[220px]", className)}>
      <div className="relative h-[300px]  rounded-[32px] shadow-3xl border-[8px] bg-black border-black dark:border-[#2a2a30] ">
        {/* Dynamic Island (Test için kırmızı renk) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center z-50">
          <div className="w-[60px] h-[16px] bg-black rounded-full opacity-100" />
          {/* iPhone detayları */}
          <div className="absolute right-[-82px] top-[80px] w-[4px] h-[30px]  bg-black dark:bg-[#2a2a30] rounded-r-xl" />
          <div className="absolute right-[-82px] top-[120px] w-[4px] h-[30px] bg-black dark:bg-[#2a2a30] rounded-r-xl" />
        </div>
        <div className="relative w-full h-full rounded-[22px] overflow-hidden">
          {image && (
            <motion.div
              initial={{ y: 0 }} // Başlangıç pozisyonu
              animate={isHovered ? { y: -500 } : { y: 0 }} // Hover'da yukarı kayma
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Animasyon yumuşaklığı
              className="w-full h-full transform "
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                width={220}
                height={880}
                className="object-top w-full"
                style={{ maxHeight: "unset" }}
              />
            </motion.div>
          )}
        </div>
        <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-4%] h-[300px] translate-x-[-8px]" />
      </div>
    </div>
  );
}
