"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Menu, X, Instagram, Twitter, Github } from "lucide-react";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { NeonButton } from "@/components/ui/neon-button";

import Amblem from "@/components/Amblem";
import Metin from "@/components/Metin";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu durumu
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  // Framer Motion ile blur vb. efekt ayarları
  const containerStyles = {
    backgroundColor: useTransform(
      scrollY,
      [0, 20],
      ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]
    ),
    backdropFilter: useTransform(scrollY, [0, 20], ["blur(0px)", "blur(24px)"]),
    border: useTransform(
      scrollY,
      [0, 20],
      theme === "dark"
        ? ["1px solid transparent", "1px solid rgba(255, 255, 255, 0.05)"]
        : ["1px solid transparent", "1px solid rgba(0, 0, 0, 0.1)"]
    ),
    borderRadius: "9999px",
  };

  // Masaüstü menü öğeleri
  const menuItems = [
    { name: "Portfolyo", path: "/portfolyo", variant: "secondary" },
    { name: "E-CV", path: "/e-cv", variant: "secondary" },
    { name: "İletişim", path: "/iletisim", variant: "secondary" },
  ];

  // Sosyal medya ikonları
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Github, href: "https://github.com" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 ${
        isScrolled ? "py-6" : "py-6"
      }`}
    >
      <motion.div
        style={containerStyles}
        className={`
          container max-w-6xl mx-auto px-1 
          ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 max-w-[768px] shadow-[0px_0px_60px_rgba(0,0,0,0.2)]"
              : "bg-transparent"
          }
          rounded-full transition-all duration-300
        `}
      >
        <div className="flex items-center justify-between py-1 h-12">
          {/* Logo: Mobilde tam daire, masaüstünde "pill" */}
          <Link
            href="/"
            className="
              flex items-center justify-center 
              rounded-full bg-gray-800 dark:bg-white 
                             text-white dark:text-black
              
              // Mobil: sabit w-14 h-10 (tam daire)
              w-14 h-10
              
              // Masaüstü: otomatik genişlik, 'pill' biçim
              md:w-auto md:h-full
              md:px-4 md:py-2
            "
          >
            <Amblem className="w-8 h-8" />
            <Metin className="hidden md:inline w-auto h-4" />
          </Link>

          {/* Masaüstü Menu */}
          <nav className="hidden md:flex items-center justify-center gap-4">
            {menuItems.map((item, idx) => (
              <Link key={idx} href={item.path}>
                <NeonButton variant={item.variant as "secondary"}>
                  {item.name}
                </NeonButton>
              </Link>
            ))}
          </nav>

          {/* Sağ Butonlar: Tema ve E-CV/Hamburger */}
          <div className="flex items-center space-x-4 h-full">
            {/* Tema Değiştirici */}
            <button
              onClick={toggleTheme}
              className="fixed rounded-full p-2 hover:bg-gray-100 dark:hover:bg-white/10
                         text-black/80 dark:text-white/80 h-full items-center right-[20%]"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Koşullu Buton: /e-cv sayfasında "E-CV İndir", diğer sayfalarda mobilde hamburger - masaüstünde "Şimdi Ara" */}
            {pathname === "/e-cv" ? (
              // E-CV sayfasındaysak -> PDF linki
              <Link
                href="/cv.pdf"
                className="inline-flex items-center justify-center gap-2 px-4
                           rounded-full bg-gray-800 dark:bg-white 
                           text-white dark:text-black h-full"
              >
                <span>E-CV İndir</span>
              </Link>
            ) : (
              // Diğer sayfalar
              <>
                {/* Mobil (md altı) -> Hamburger Butonu (AÇIYOR) */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden inline-flex items-center justify-center
             w-14 rounded-full bg-gray-800 dark:bg-white 
             text-white dark:text-black h-full"
                >
                  <motion.div
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                      open: { rotate: 180, opacity: 1 },
                      closed: { rotate: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isMenuOpen ? (
                      <X className="w-6 h-6 stroke-[3]" />
                    ) : (
                      <Menu className="w-6 h-6 stroke-[3]" />
                    )}
                  </motion.div>
                </button>

                {/* Masaüstü (md ve üstü) -> "Şimdi Ara" Linki */}
                <Link
                  href="/iletisim"
                  className="hidden md:inline-flex items-center justify-center gap-2 px-4
                             rounded-full bg-gray-800 dark:bg-white 
                             text-white dark:text-black h-full"
                >
                  <span>Şimdi Ara</span>
                </Link>
              </>
            )}

            <style jsx>{`
              @keyframes gradientAnimation {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </div>
        </div>
      </motion.div>

      {/* BURADA AnimatePresence ile Tam Ekran Blur Menü */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="modalOverlay"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 -z-50 bg-white/25 dark:bg-black/25 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Menü Paneli */}
            <motion.div
              className="fixed inset-x-[-2px] z-50 bottom-[-80px] transform -translate-x-1/2 mx-auto 
            bg-white/80 dark:bg-white/5 backdrop-blur-3xl border border-white/20 dark:border-white/10
              backdrop-blur-3xl shadow-[0px_0px_60px_rgba(0,0,0,0.2)] rounded-t-[2rem] p-6 flex flex-col items-center"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 250, // Hızı artır
                damping: 30, // Daha az direnç olsun ki daha hızlı bitsin
              }}
            >
              {/* Menü Başlığı (isterseniz) */}
              <h2 className="dark:text-white text-black text-xl font-semibold">
                MENÜ
              </h2>

              {/* Menü Linkleri */}
              <nav className="flex flex-col items-center w-full gap-4 mt-8">
                <Link
                  href="/portfolyo"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className="w-full text-center text-white py-3 rounded-full
                                 dark:bg-white/20 dark:hover:bg-white/20 bg-black hover:bg-black/80"
                  >
                    PORTFOLYO
                  </div>
                </Link>

                <Link
                  href="/e-cv"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className="w-full text-center text-white py-3 rounded-full
                                 dark:bg-white/20 dark:hover:bg-white/20 bg-black hover:bg-black/80"
                  >
                    E-CV
                  </div>
                </Link>

                <Link
                  href="/iletisim"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className="w-full text-center text-white py-3 rounded-full
                                 dark:bg-white/20 dark:hover:bg-white/20 bg-black hover:bg-black/80"
                  >
                    İLETİŞİM
                  </div>
                </Link>
              </nav>
              <div className="w-full py-10"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
