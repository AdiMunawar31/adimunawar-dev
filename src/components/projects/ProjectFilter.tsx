import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectFilter({
  showFilter,
  setShowFilter,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  total,
}: any) {
  return (
    <div className="flex w-full flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-neutral-800 text-foreground border border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-700 cursor-pointer transition-colors"
        >
          <Filter size={18} />
          {showFilter ? "Hide Filters" : "Show Filters"}
          {showFilter ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.button>
        <div className="relative w-full sm:w-[300px] md:w-[400px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 rounded placeholder:text-neutral-500 bg-white dark:bg-neutral-800 border border-neutral-700 text-foreground outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      <span
        className="text-foreground text-md font-bold mr-8"
        style={{ fontFamily: "var(--font-open-sans)" }}
      >
        {total} Results
      </span>
    </div>
  );
}
