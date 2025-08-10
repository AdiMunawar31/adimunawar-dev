"use client";

import Link from "next/link";
import { ThemeToggle } from "../customs/ThemeToggle";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            {"<"}Adi Munawar{" "}
            <span className="text-muted-foreground">/&gt;</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right side */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ThemeToggle />
          <Button
            size="sm"
            variant="default"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            Download CV
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
