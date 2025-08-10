"use client";

import { D2YTag } from "../base/D2YTag";
import { CertificatesMarquee } from "../customs/CertificatesMarquee";
import HighlightedCertificatesSwiper from "../customs/HighlightedCertificates";
import Section from "../layouts/Section";
import { motion } from "framer-motion";

export const CertificateSection = () => {
  return (
    <Section>
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
          Certificates
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
          Here’s a quick summary of my most recent certificates:
        </p>
      </motion.div>

      <HighlightedCertificatesSwiper />
      <CertificatesMarquee />
    </Section>
  );
};
