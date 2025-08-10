"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Section from "../layouts/Section";
import { skills } from "@/lib/data/skills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function SkillsSection() {
  return (
    <Section background="subtleGrid">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Skills
            </motion.h2>
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "5rem", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[3px] bg-neutral-500 mx-auto mt-3 rounded-full"
            />
          </div>
        </div>
        <h2 className="mt-4 text-lg md:text-xl font-semibold text-neutral-600 dark:text-neutral-400">
          The skills, tools and technologies I am really good at:
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-3 rounded-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.96 }}
            role="img"
            aria-label={skill.name}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="mb-2"
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
