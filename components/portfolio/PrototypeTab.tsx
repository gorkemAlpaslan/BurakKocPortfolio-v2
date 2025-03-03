"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LinkIcon } from "lucide-react"

export function PrototypeTab({ project }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/10 dark:bg-white/10 backdrop-blur-sm">
          <iframe
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
            asChild
          >
            <a
              href="https://www.figma.com/file/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <LinkIcon className="w-4 h-4" />
              <span>Figma'da Görüntüle</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

