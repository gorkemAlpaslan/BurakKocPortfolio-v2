"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MacbookFrameProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  alt?: string;
  isHovered?: boolean;
}

export default function MacbookFrame({
  className,
  image,
  alt = "Preview",
  isHovered = false,
}: MacbookFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[380px] sm:max-w-[422px] h-[430px] sm:h-[430px] top-24 border-[1px] border-white/35 rounded-[26px]",
        className
      )}
    >
      <motion.div
        className={cn(
          "relative w-full max-w-[380px] sm:max-w-[422px] h-[430px] sm:h-[430px] rounded-[24px] border-[8px] bg-black dark:bg-[#19191e] border-black dark:border-[#19191e]",
          isHovered
            ? "shadow-[0px_40px_140px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_140px_rgba(255,255,255,0.4)] z-100"
            : "shadow-none"
        )}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        {/* Macbook Ekran İçeriği */}
        <div className="relative w-full h-full rounded-[16px] border-white/25 overflow-hidden">
          {image && (
            <motion.div
              initial={{ y: 0 }}
              animate={isHovered ? { y: -400 } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                width={800}
                height={600}
                className="object-top w-full"
                style={{ maxHeight: "unset" }}
              />
            </motion.div>
          )}
        </div>
        <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-4%] h-[300px] translate-x-[-8px]" />
      </motion.div>
    </div>
  );
}
