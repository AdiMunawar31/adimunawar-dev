"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { allCertificateList } from "@/lib/data/certificates";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";
import SkeletonCard from "@/components/customs/SkeletonCard";

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    ...new Set(allCertificateList.map((c) => c.category)),
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredCertificates = allCertificateList.filter((c) => {
    const matchCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchSearch = c.alt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white px-16 py-10">
      {/* Header + Search */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start mb-12 gap-4 mx-8"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Certificates</h1>
          <p className="flex-1 text-sm text-gray-400 max-w-2xl">
            This page is a dedicated section for showcasing a list of
            certificates...
          </p>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-neutral-800 text-foreground border border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-700 cursor-pointer transition-colors mr-4"
            >
              <Filter size={18} />
              {showFilter ? "Hide Filters" : "Show Filters"}
              {showFilter ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.button>

            <div className="relative w-[450px]">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search certificate..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 p-2 rounded placeholder:text-neutral-500 bg-white dark:bg-neutral-800 border border-neutral-700 text-foreground outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <span
            className="text-foreground text-md font-bold"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            {allCertificateList.length} Results
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-6 mx-8">
        {/* Filter Sidebar */}
        <AnimatePresence>
          {showFilter && (
            <motion.div
              key="sidebar"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-3 flex flex-col gap-6 p-4 rounded-lg bg-white dark:bg-black h-fit border-t mr-4
                 sticky top-16"
            >
              <div>
                <h2 className="text-lg font-semibold mb-3 text-foreground">
                  Category
                </h2>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-2 rounded text-left text-md transition-colors ${
                        selectedCategory === cat
                          ? " bg-black dark:bg-neutral-600 dark:text-neutral-200 text-neutral-100 font-semibold"
                          : "bg-gray-100 dark:bg-neutral-800 hover:bg-neutral-300 hover:dark:bg-neutral-700 dark:text-neutral-200 text-neutral-800"
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificate List */}
        <div
          className={`${
            showFilter ? "col-span-12 md:col-span-9" : "col-span-12"
          }`}
        >
          {loading ? (
            <SkeletonCard count={6} />
          ) : filteredCertificates.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-4"
            >
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={`${cert.alt}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="dark:bg-neutral-800 bg-white border rounded-lg shadow-lg hover:shadow-white/20 transition-all flex flex-col"
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                      {cert.alt}
                    </h3>
                    <p className="text-sm text-neutral-500">{cert.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <Image
                src="/icons/no-data.svg"
                alt="No Data"
                width={130}
                height={130}
              />
              <h2 className="text-xl font-semibold mt-8 text-foreground">
                No certificates found.
              </h2>
              <p className="text-gray-500 text-sm">
                Add certificates to showcase your skills and accomplishments.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
