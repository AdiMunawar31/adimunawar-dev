"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CertificateCard({ cert, onClick }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="cursor-pointer dark:bg-neutral-800 bg-white border rounded-lg shadow-lg hover:shadow-white/20 transition-all flex flex-col"
    >
      <div className="relative w-full h-52">
        <Image src={cert.src} alt={cert.alt} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">
          {cert.alt}
        </h3>
        <p className="text-sm text-neutral-500">{cert.category}</p>
      </div>
    </motion.div>
  );
}
