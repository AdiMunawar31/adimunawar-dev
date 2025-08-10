// src/components/Introduction.tsx
"use client";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Circle,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Mouse,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "../layouts/Section";

export default function Introduction() {
  const [scrambledName, setScrambledName] = useState("");
  const targetName = "Adi Munawar";

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledName(() =>
        targetName
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return targetName[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 2;
      if (iteration >= targetName.length) {
        clearInterval(interval);
        setScrambledName(targetName);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="grid ml-0 sm:ml-8 md:grid-cols-2 gap-10 items-center py-12">
        {" "}
        {/* Text Content */}
        <div className="space-y-6 -mt-4 sm:order-1 order-2">
          {/* Nama dengan animasi scramble */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl font-bold leading-tight text-black dark:text-white"
          >
            Hi, I’m{" "}
            <span className="text-primary inline-flex items-center">
              {scrambledName}
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            I am a dedicated{" "}
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">
              Fullstack Web & Mobile Developer
            </span>{" "}
            specializing in
            <span className="font-medium"> React.js, Next.js, Node.js</span> for
            the web and
            <span className="font-medium"> Flutter</span> for cross-platform
            mobile applications. I focus on crafting fast, accessible, and
            visually engaging digital experiences with a strong emphasis on
            clean architecture and maintainable code. With over 2 years of
            experience delivering high-quality products for startups,
            enterprises, and agencies.
          </motion.p>

          {/* Location & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bandung, Indonesia
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Circle className="w-4 h-4 text-green-500 fill-green-500 animate-pulse " />
              Available for new projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-start gap-1"
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative w-fit mx-auto ml-10 mb-8 sm:mb-0 sm:ml-48 -mt-12 sm:order-2 order-1"
        >
          {/* Layer abu-abu (shadow) */}
          <div className="absolute top-4 left-4 w-0 sm:w-[300px] h-0 sm:h-[350px] bg-gray-200 dark:bg-neutral-700 rounded-md z-0" />

          {/* Foto dengan border putih */}
          <div className="relative z-10 border-[12px] border-white dark:border-black rounded-md w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Adi Munawar"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground "
      >
        <Mouse className="w-10 h-10" />
        <ChevronDown className="w-5 h-5 -mt-1.5" />
        <ChevronDown className="w-5 h-5 -mt-3.5" />
      </motion.div>
    </Section>
  );
}
