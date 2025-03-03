// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import MacbookFrame from "@/components/macbook-frame";

// interface MacbookShowcaseProps {
//   projects: string[]; // Proje görselleri listesi
//   interval?: number; // Görsel değiştirme süresi (ms)
// }

// export default function MacbookShowcase({
//   projects,
//   interval = 4000,
// }: MacbookShowcaseProps) {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
//   const [isMovingDown, setIsMovingDown] = useState(false);

//   useEffect(() => {
//     const animationInterval = setInterval(() => {
//       setIsMovingDown(true);

//       setTimeout(() => {
//         setCurrentProjectIndex(
//           (prevIndex) => (prevIndex + 1) % projects.length
//         );
//         setIsMovingDown(false);
//       }, 500); // Animasyon süresi kadar bekletiyoruz
//     }, interval);

//     return () => clearInterval(animationInterval);
//   }, [projects, interval]);

//   return (
//     <div className="relative w-full overflow-hidden flex justify-center items-center h-[450px]">
//       <motion.div
//         className="relative w-full h-full max-w-3xl max-h-[1080px] overflow-hidden mx-auto"
//         animate={{ y: isMovingDown ? 500 : 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <MacbookFrame
//           image={projects[currentProjectIndex]}
//           className="relative w-full h-full"
//         />
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MacbookFrame from "@/components/macbook-frame";
import projects from "@/datas/Projects"; // Proje verilerini alıyoruz

export default function MacbookShowcase({ interval = 4000 }) {
  const macProjects = projects
    .filter((project) => project.deviceType === "macbook") // SADECE MAC PROJELERİ
    .map((project) => project.imageUrl)
    .filter(Boolean)
    .slice(0, 2); // İlk 5 projeyi göster

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMovingDown, setIsMovingDown] = useState(false);

  useEffect(() => {
    if (macProjects.length === 0) return;

    const animationInterval = setInterval(() => {
      setIsMovingDown(true);

      setTimeout(() => {
        setCurrentProjectIndex(
          (prevIndex) => (prevIndex + 1) % macProjects.length
        );
        setIsMovingDown(false);
      }, 600); // Daha kısa bekleme süresi
    }, interval);

    return () => clearInterval(animationInterval);
  }, [macProjects, interval]);

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center h-[450px]">
      <motion.div
        className="relative w-full top-40 max-w-3xl max-h-[1080px] overflow-hidden mx-auto"
        animate={{
          y: isMovingDown ? 450 : 0, // Daha hızlı geçiş
        }}
        transition={{
          type: "spring",
          stiffness: 50, // Hızlandırılmış hareket
          damping: 10, // Daha hızlı durma
        }}
      >
        {/* Hafif salınım efekti */}
        <motion.div
          animate={{
            y: [0, -6, 6, 0],
          }}
          transition={{
            duration: 3, // Daha sık hareket
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MacbookFrame
            image={macProjects[currentProjectIndex]}
            className="relative w-full h-[800px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
