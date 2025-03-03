"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function UserFlowTab({ Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        User Flow Diagram
      </h2>
      <div className="bg-white dark:bg-[#030303] rounded-xl shadow-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ayRHIuXg1QLDpjAleRlhuMjmztat7d.png"
          alt="User Flow Diagram"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
      <div className="grid gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black/5 dark:bg-white/5 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Flow Description</h3>
          <p className="text-black/80 dark:text-white/80">
            This user flow diagram illustrates the complete journey from service
            selection to confirmation. Users start by selecting a service, then
            enter their details. The system validates the input and processes
            the request. After approval, the system generates a report and sends
            a confirmation.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
