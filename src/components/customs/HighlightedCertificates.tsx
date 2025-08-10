"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { highlightedCertificates } from "@/lib/data/certificates";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CertificateCarousel() {
  const [current, setCurrent] = useState(0);
  const total = highlightedCertificates.length;

  // Ref & observer untuk trigger animasi saat di-scroll
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger ketika 20% elemen terlihat
    triggerOnce: true, // Animasi hanya sekali
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
    if (index === getIndex(current)) return "scale-110 z-20 opacity-100";
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
        damping: 20,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-6xl mx-auto py-10 overflow-hidden"
    >
      <div className="relative h-[400px] flex justify-center items-center">
        {highlightedCertificates.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${getSlideClass(
              index
            )}`}
            variants={slideVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Trigger saat di-scroll
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="rounded-xl object-contain shadow-xl"
            />
          </motion.div>
        ))}

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-40 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md z-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-40 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow-md z-30"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-24 gap-2">
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
  );
}
