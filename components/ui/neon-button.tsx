"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function NeonButton({
  className,
  variant = "primary",
  children,
  ...props
}: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative px-6 py-2 rounded-full text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
          : "bg-transparent text-black dark:text-white border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
