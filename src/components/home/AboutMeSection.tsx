// src/components/sections/AboutMeSection.tsx

"use client";

import Image from "next/image";
import Section from "../layouts/Section";
import { D2YTag } from "../base/D2YTag";
import { motion } from "framer-motion";

export function AboutMeSection() {
  return (
    <Section background="muted">
      {/* Title */}
      <motion.div
        className="flex justify-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[3px] bg-blue-500 mx-auto mt-3 mb-8 rounded-full"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Profile Image */}
        <motion.div
          className="relative w-fit mx-auto mr-52 -mt-8"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 w-[300px] h-[350px] bg-gray-200 dark:bg-neutral-700 rounded-md z-0" />
          <div className="relative z-10 border-[12px] border-white dark:border-black rounded-md w-[300px] h-[350px] overflow-hidden shadow-lg">
            <Image
              src="/images/profile2.jpg"
              alt="Adi Munawar"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Curious about me? Here you have it:
          </h2>
          <div
            className="space-y-4 text-neutral-700 dark:text-neutral-400"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <p>
              I'm a passionate,{" "}
              <a
                href="#"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition"
              >
                self-proclaimed designer
              </a>{" "}
              who specializes in full stack development (React.js & Node.js)...
            </p>
            <p>I began my journey as a web developer in 2015...</p>
            <p>I am very much a progressive thinker...</p>
            <p>When I'm not in full-on developer mode...</p>
            <p className="font-medium">Finally, some quick bits about me.</p>
            <ul className="list-disc list-inside grid grid-cols-2 gap-x-8 gap-y-1">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work...{" "}
              <span className="inline-block">😊</span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
