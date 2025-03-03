"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "relative top-24 border-[1px] border-white/25 rounded-[33px]",
        className
      )}
    >
      {/* iPhone Çerçevesi */}
      <motion.div
        className={cn(
          "relative w-[220px] h-[430px] rounded-[32px] border-[8px] bg-black border-black dark:border-[#19191e]",
          isHovered
            ? "shadow-[0px_40px_240px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_240px_rgba(255,255,255,0.4)]"
            : "shadow-none"
        )}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center z-50">
          <div className="w-[60px] h-[16px] bg-black rounded-full opacity-100" />
        </div>

        {/* Ekran */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden">
          {image && (
            <motion.div
              initial={{ y: 0 }}
              animate={isHovered ? { y: -750 } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full transform"
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
      </motion.div>
    </div>
  );
}
