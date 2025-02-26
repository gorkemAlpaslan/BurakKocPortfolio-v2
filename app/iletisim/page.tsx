"use client";

import type React from "react";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.8,
      ease: [0.23, 0.86, 0.39, 0.96],
    },
  }),
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simüle edilmiş form gönderimi
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormStatus("sent");

    // 3 saniye sonra formu sıfırla
    setTimeout(() => {
      setFormStatus("idle");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-white transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/80">
            İletişime Geç
          </h1>
          <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Sol Kolon - İletişim Bilgileri */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium">burak@ornek.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Telefon
                    </p>
                    <p className="font-medium">+90 555 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Adres
                    </p>
                    <p className="font-medium">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sağ Kolon - İletişim Formu */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "idle" && (
                    <>
                      <span>Gönder</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                      <span>Gönderiliyor...</span>
                    </>
                  )}
                  {formStatus === "sent" && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 text-white"
                      >
                        ✓
                      </motion.div>
                      <span>Gönderildi!</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="py-6">
        <div className="flex items-center justify-center space-x-6 px-4">
          {/* Sosyal medya ikonları */}
        </div>
      </footer>
    </div>
  );
}
