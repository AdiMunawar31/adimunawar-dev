"use client";

import Link from "next/link";
import { ThemeToggle } from "../customs/ThemeToggle";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/navigation";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.nav
            className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={`${item.href}-${index}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`relative pb-1 transition-colors ${
                      isActive
                        ? "text-foreground font-bold"
                        : "hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-[2px] bg-neutral-500"
                        initial={false}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
          <div className="border-r-2 border-neutral-400 h-6 ml-4" />
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            variant="default"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            <a
              href="/CV-AdiMunawar.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="p-2 rounded-md hover:bg-muted"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Full solid background) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col p-6 bg-white dark:bg-neutral-950 min-h-screen"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="p-2 rounded-md hover:bg-muted"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col divide-y divide-border">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-2 py-4 transition-colors ${
                      isActive
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 pb-0 border-t border-border ">
              <Button
                asChild
                size="sm"
                variant="default"
                className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                <a
                  href="/CV-AdiMunawar.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
