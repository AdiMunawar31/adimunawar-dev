"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "../layouts/Section";

export function QuoteSection() {
  return (
    <Section>
      <div className="container mx-auto px-6 text-center mb-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Words of Wisdom
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[3px] bg-blue-500 mx-auto mt-3 rounded-full"
        />

        {/* Quote Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="italic max-w-3xl mx-auto mt-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {` "Great design is not just about aesthetics, but about creating an
          experience that resonates with people’s emotions, inspires action, and
          stands the test of time."`}
        </motion.p>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center"
        >
          {/* <-- WRAPPER: equal width & height + rounded-full + overflow-hidden */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-900 shadow-sm">
            <Image
              src="/images/profile.jpg"
              alt="Adi Munawar"
              width={400}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">
            Adi Munawar
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Full Stack Developer
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
