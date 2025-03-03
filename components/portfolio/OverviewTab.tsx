"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function OverviewTab({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {project.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 3 === 0 ? -20 : index % 3 === 2 ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6 flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-black/5 dark:bg-white/5">
              <metric.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-black/60 dark:text-white/60">{metric.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Proje Hakkında</h2>
            <p className="text-black/80 dark:text-white/80 whitespace-pre-line">{project.fullDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Araştırma Metodları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.researchMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-black/80 dark:text-white/80">{method}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Hedefler</h3>
            <div className="grid gap-4">
              {project.goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4">
                  <Target className="w-5 h-5 text-purple-500 mt-0.5" />
                  <span className="text-black/80 dark:text-white/80">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Sonuçlar</h3>
            <div className="grid gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-black/80 dark:text-white/80">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Teslim Edilenler</h3>
            <ul className="space-y-2 text-black/60 dark:text-white/60">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Teknolojiler</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Takım</h3>
            <ul className="space-y-2 text-black/60 dark:text-white/60">
              {project.team.map((member, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Proje Süresi</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-black/60 dark:text-white/60">Başlangıç</span>
              <span className="text-black/60 dark:text-white/60">Bitiş</span>
            </div>
            <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-full" />
            </div>
            <p className="text-center mt-2 text-black/60 dark:text-white/60">{project.duration}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

