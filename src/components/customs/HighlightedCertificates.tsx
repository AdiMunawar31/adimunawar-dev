"use client";

import { highlightedCertificates } from "@/lib/data/certificates";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CertificateCarousel() {
  const [current, setCurrent] = useState(0);
  const total = highlightedCertificates.length;

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const getIndex = (index: number) => {
    return (index + total) % total;
  };

  const getSlideClass = (index: number) => {
    if (index === getIndex(current)) return "scale-100 z-20 opacity-100";
    if (index === getIndex(current - 1) || index === getIndex(current + 1))
      return "scale-95 blur-sm opacity-70 z-10";
    return "scale-90 opacity-0 pointer-events-none absolute";
  };

  // Variants animasi
  const slideVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 50,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-6xl mx-auto py-10 overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Gambar */}
        <div className="relative w-full h-[250px] sm:h-[400px] flex justify-center items-center">
          {highlightedCertificates.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-full px-4 sm:px-0 sm:w-auto transition-all duration-500 ease-in-out ${getSlideClass(
                index
              )}`}
              variants={slideVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="rounded-xl object-contain shadow-xl w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Controls di mobile (bawah) */}
        <div className="flex sm:hidden gap-4 mt-4 z-30">
          <button
            onClick={handlePrev}
            className="bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2 z-30">
          {highlightedCertificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Controls di desktop (kiri-kanan) */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md z-30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md z-30"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
