"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "../layouts/Section";

export function AboutMeSection() {
  return (
    <Section background="grid">
      <motion.div
        className="flex justify-center mb-16 relative z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[3px] bg-neutral-500 mx-auto mt-3 mb-8 rounded-full"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-20">
        {/* LEFT: Profile Image */}
        <motion.div
          className="relative w-fit mx-auto mr-8 sm:mr-52 -mt-16 sm:-mt-24"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 w-0 sm:w-[300px] h-0 sm:h-[350px] bg-gray-200 dark:bg-neutral-700 rounded-md z-0" />
          <div className="relative z-10 border-[12px] border-white dark:border-black rounded-md w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] overflow-hidden shadow-lg">
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
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Curious about me? Here you have it:
          </h2>
          <div
            className="space-y-4 text-neutral-700 dark:text-neutral-300"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <p>
              I am a highly driven{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                Fullstack Web & Mobile Developer
              </span>{" "}
              specializing in modern technologies such as{" "}
              <span className="font-medium">React.js, Next.js, Node.js</span>{" "}
              for web, and <span className="font-medium">Flutter</span> for
              cross-platform mobile applications. With more than 2 years of
              professional experience, I focus on building fast, accessible, and
              user-centric digital solutions that merge performance with
              exceptional design.
            </p>

            <p>
              My journey in software development started in 2023, driven by
              curiosity and the desire to create products that solve real-world
              problems. Since then, I’ve collaborated with startups,
              enterprises, and agencies, delivering projects that range from{" "}
              <span className="italic">scalable enterprise platforms</span> to{" "}
              <span className="italic">sleek, modern mobile apps</span>.
            </p>

            <p className="font-medium">Some quick facts about me:</p>
            <ul className="list-disc list-inside grid grid-cols-1 gap-x-8 gap-y-1">
              <li>B.E. in Computer Engineering</li>
              <li>2+ years of development experience</li>
              <li>Specialist in Web & Mobile Apps</li>
              <li>Strong UI/UX design sense</li>
            </ul>

            <p>
              I am currently{" "}
              <span className="font-semibold text-green-600">open</span> for
              freelance and collaboration opportunities — let’s build something
              impactful together! <span className="inline-block">🚀</span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
