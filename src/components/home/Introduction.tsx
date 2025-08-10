// src/components/Introduction.tsx
"use client";
import { useEffect, useState } from "react";
import { MapPin, Circle, Github, Twitter, BookOpenCheck } from "lucide-react";
import Image from "next/image";
import Section from "../layouts/Section";
import { motion } from "framer-motion";

export default function Introduction() {
  const [scrambledName, setScrambledName] = useState("");
  const targetName = "Adi Munawar";

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledName((prev) =>
        targetName
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return targetName[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 2; // kecepatan scramble
      if (iteration >= targetName.length) {
        clearInterval(interval);
        setScrambledName(targetName); // pastikan nama asli muncul penuh
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="grid ml-8 md:grid-cols-2 gap-10 items-center py-20">
        {/* Text Content */}
        <div className="space-y-6">
          {/* Nama dengan animasi scramble */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
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
            className="text-neutral-800 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
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

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex items-center gap-6 pt-4"
          >
            <Github className="w-5 h-5 hover:text-primary cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
            <BookOpenCheck className="w-5 h-5 hover:text-primary cursor-pointer" />
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative w-fit mx-auto ml-48 -mt-8"
        >
          {/* Layer abu-abu (shadow) */}
          <div className="absolute top-4 left-4 w-[300px] h-[350px] bg-gray-200 dark:bg-neutral-700 rounded-md z-0" />

          {/* Foto dengan border putih */}
          <div className="relative z-10 border-[12px] border-white dark:border-black rounded-md w-[300px] h-[350px] overflow-hidden shadow-lg">
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
    </Section>
  );
}
