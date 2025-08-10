"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t bg-white dark:bg-zinc-950 text-slate-600 dark:text-slate-300"
    >
      <div className="container mx-auto px-6 py-12 grid gap-12 md:grid-cols-3">
        {/* Column 1 - Brand & Description */}
        <div className="space-y-4 text-center md:text-left">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
              {"<"}Adi Munawar{" "}
              <span className="text-muted-foreground">/&gt;</span>
            </div>
          </motion.div>
          <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I specialize in designing and developing high-quality, scalable
            web/mobile applications that blend modern technology with
            exceptional user experience.
          </p>
          <Button size="sm" variant="default" className="mt-3">
            Get in Touch
          </Button>
        </div>

        {/* Column 2 - Contact */}
        <div className="space-y-4 text-center md:text-left ml-0 sm:ml-16">
          <h4 className="text-lg font-semibold text-black dark:text-white">
            Contact
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="h-4 w-4" />
            <span className="font-medium">adimunawar.dev@gmail.com</span>
            <Copy className="h-4 w-4 text-neutral-600 dark:text-neutral-300 cursor-pointer  hover:text-black dark:hover:text-white transition-colors" />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-medium">+62-81563754507</span>
            <Copy className="h-4 w-4 text-neutral-600 dark:text-neutral-300 cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
          </div>
        </div>

        {/* Column 3 - Social */}
        <div className="space-y-4 text-center md:text-left ml-0 sm:ml-8">
          <h4 className="text-lg font-semibold text-black dark:text-white">
            Follow Me
          </h4>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm">
            Stay connected through my social channels for updates, insights, and
            tech-related content.
          </p>
          <div className="flex justify-center md:justify-start gap-5">
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
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200 dark:border-slate-800 mt-10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} | Designed & coded with{" "}
        <span className="text-red-500">❤️</span> by Adi Munawar
      </div>
    </motion.footer>
  );
}
