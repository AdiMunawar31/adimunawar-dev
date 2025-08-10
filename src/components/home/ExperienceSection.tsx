"use client";

import { experiences } from "@/lib/data/experiences";
import { ExperienceCard } from "../customs/ExperienceCard";
import Section from "../layouts/Section";
import { D2YTag } from "../base/D2YTag";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const ExperienceSection = () => {
  return (
    <Section background="muted">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Projects
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[3px] bg-blue-500 mx-auto mt-3 rounded-full"
        />
        <p className="text-center text-muted-foreground mb-12 mt-8">
          Here’s a quick summary of my most recent projects:
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} index={idx} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
