"use client";
import { allCertificateList } from "@/lib/data/certificates";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

export default function CertificateHeader({
  searchTerm,
  setSearchTerm,
  showFilter,
  setShowFilter,
  total,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start mb-12 gap-4 mx-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Certificates</h1>
        <p className="flex-1 text-sm text-gray-400 max-w-2xl mt-2">
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
  );
}
