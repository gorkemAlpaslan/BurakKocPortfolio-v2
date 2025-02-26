"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface HobbyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HobbyCard = ({ icon: Icon, title, description }: HobbyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
};

export default HobbyCard; // ✅ Default export eklendi!
