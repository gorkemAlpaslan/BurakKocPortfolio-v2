"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Modal({
  isOpen,
  onClose,
  onNext,
  onPrev,
  children,
  currentImage,
  images,
  onThumbnailClick,
}) {
  const [direction, setDirection] = useState(0);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const contentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-3xl z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          {/* Kapatma Butonu (Sağ Üstte) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 p-2 rounded-full transition z-[60]"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Önceki ve Sonraki Butonları */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDirection(-1);
              onPrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition z-[60]"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setDirection(1);
              onNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition z-[60]"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Modal İçeriği */}
          <motion.div
            className="relative w-full max-w-5xl mx-auto px-4"
            onClick={handleContentClick}
            variants={modalVariants}
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentImage}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full h-full absolute"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Thumbnail Preview */}
          <motion.div
            className="fixed bottom-8 items-center justify-center flex space-x-4 overflow-x-auto max-w-full p-4 bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-xl"
            onClick={handleContentClick}
            variants={modalVariants}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-14 rounded-md overflow-hidden cursor-pointer transition-opacity duration-300 ${
                  index === currentImage
                    ? "opacity-100 ring-2 ring-blue-500"
                    : "opacity-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(index > currentImage ? 1 : -1);
                  onThumbnailClick(index);
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={96}
                  height={54}
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
