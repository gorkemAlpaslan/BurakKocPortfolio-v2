"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ useRouter yerine usePathname kullanıldı
import { NeonButton } from "@/components/ui/neon-button"; // ✅ Hatalı import düzeltildi
import { Phone } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ✅ useRouter yerine usePathname kullanıldı

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

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

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-6" : "py-6"
      }`}
    >
      <motion.div
        style={containerStyles}
        className={`
          container max-w-6xl mx-auto px-2 
          ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 max-w-[768px] shadow-[0px_0px_60px_rgba(0,0,0,0.2)]"
              : "bg-transparent"
          }
          rounded-full transition-all duration-300
        `}
      >
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-full w-auto dark:hidden"
              />
              <img
                src="/logo-dark.svg"
                alt="Logo Dark Mode"
                className="h-full w-auto hidden dark:block"
              />
            </Link>
            <button
              onClick={() => {}}
              className=" cursor-default pointer-events-none opacity-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black/80 dark:text-white/80"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Menü */}
          <nav className="hidden md:flex items-center justify-center gap-4 !border-none">
            {[
              {
                name: "Portfolyo",
                path: "/portfolyo",
                variant: "secondary" as "secondary",
              },
              {
                name: "E-CV",
                path: "/e-cv",
                variant: "secondary" as "secondary",
              },
              {
                name: "İletişim",
                path: "/iletisim",
                variant: "secondary" as "secondary",
              },
            ].map((item, i) => (
              <Link key={i} href={item.path}>
                <NeonButton variant={item.variant}>{item.name}</NeonButton>
              </Link>
            ))}
          </nav>

          {/* Sağ Buton ve Tema Değiştirici */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black/80 dark:text-white/80"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              href={pathname === "/e-cv" ? "/cv.pdf" : "/iletisim"}
              className="inline-flex items-center justify-center gap-2 px-6 py-2 w-[140px] rounded-full text-white transition-colors"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #3b82f6, #9333ea, #ec4899)",
                backgroundSize: "200% 100%",
                animation: "gradientAnimation 3s infinite ease-in-out",
              }}
            >
              {pathname === "/e-cv" ? (
                <span>E-CV İndir</span>
              ) : (
                <>
                  <span>Şimdi Ara</span>
                </>
              )}
            </Link>

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
    </motion.header>
  );
}
