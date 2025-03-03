"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ProcessTab({ project }) {
  const steps = Object.keys(project.process)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Process Steps Grid - Yaratıcı Tasarım */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => {
          const processStep = project.process[step]
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {processStep.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-4">{processStep.description}</p>
                <ul className="space-y-2">
                  {processStep.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 hidden lg:block"></div>
      </div>

      {/* Process Details */}
      <div className="space-y-32">
        {steps.map((step, index) => {
          const processStep = project.process[step]
          return (
            <motion.div
              key={step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "" : "md:order-2"}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-black/60 dark:text-white/60">
                      {String(index + 1).padStart(2, "0")}. {processStep.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {processStep.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80 mb-6">{processStep.description}</p>
                  <div className="grid gap-4">
                    {processStep.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                        className="flex items-start gap-3 bg-black/5 dark:bg-white/5 rounded-lg p-4 transform transition-all duration-300 hover:scale-105"
                      >
                        <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5" />
                        <span className="text-black/80 dark:text-white/80">{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 0 ? "" : "md:order-1"}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <Image
                      src={processStep.image || "/placeholder.svg"}
                      alt={processStep.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-semibold mb-2">{processStep.title}</h4>
                      <p className="text-sm">{processStep.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

