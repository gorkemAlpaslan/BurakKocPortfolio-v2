"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Modal from "@/components/Modal"

export function GalleryTab({ project }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = useCallback(() => {
    setSelectedImage((prev) => (prev === null ? null : prev === 0 ? project.gallery.length - 1 : prev - 1))
  }, [project.gallery.length])

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev === null ? null : prev === project.gallery.length - 1 ? 0 : prev + 1))
  }, [project.gallery.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setSelectedImage(null)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, handlePrevious, handleNext])

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-4">
          {project.gallery.map((image, index) => {
            const sizeClasses =
              [
                "md:col-span-8 md:row-span-2",
                "md:col-span-4 md:row-span-2",
                "md:col-span-3 md:row-span-1",
                "md:col-span-3 md:row-span-1",
                "md:col-span-6 md:row-span-2",
                "md:col-span-6 md:row-span-2",
                "md:col-span-4 md:row-span-2",
                "md:col-span-4 md:row-span-1",
                "md:col-span-4 md:row-span-1",
                "md:col-span-8 md:row-span-2",
                "md:col-span-6 md:row-span-2",
                "md:col-span-6 md:row-span-2",
              ][index] || "md:col-span-4 md:row-span-1 "

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${sizeClasses} relative rounded-2xl overflow-hidden group cursor-pointer`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrev={handlePrevious}
        currentImage={selectedImage}
        images={project.gallery}
        onThumbnailClick={setSelectedImage}
      >
        {selectedImage !== null && (
          <Image
            src={project.gallery[selectedImage] || "/placeholder.svg"}
            alt={`Image ${selectedImage + 1}`}
            fill
            className="object-none rounded-2xl"
          />
        )}
      </Modal>
    </>
  )
}

