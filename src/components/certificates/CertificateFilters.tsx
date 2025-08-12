"use client";
import { motion } from "framer-motion";

export default function CertificateFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
}: any) {
  return (
    <motion.div
      key="sidebar"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="col-span-12 md:col-span-3 flex flex-col gap-6 p-4 rounded-lg bg-white dark:bg-black h-fit border-t -ml-4 mr-0 md:mr-4 sticky top-16"
    >
      <div>
        <h2 className="text-lg font-semibold mb-3 text-foreground">Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat: any) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded text-left text-md transition-colors ${
                selectedCategory === cat
                  ? "bg-black dark:bg-neutral-600 dark:text-neutral-200 text-neutral-100 font-semibold"
                  : "bg-gray-100 dark:bg-neutral-800 hover:bg-neutral-300 hover:dark:bg-neutral-700 dark:text-neutral-200 text-neutral-800"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
