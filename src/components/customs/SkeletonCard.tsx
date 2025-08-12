import { FC } from "react";
import { motion } from "framer-motion";

interface SkeletonCardProps {
  count?: number;
  className?: string;
}

const SkeletonCard: FC<SkeletonCardProps> = ({ count = 6, className }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className="dark:bg-neutral-900 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Image placeholder */}
          <div className="relative w-full h-48 bg-white dark:bg-neutral-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 animate-shimmer" />
          </div>

          {/* Text placeholders */}
          <div className="p-4 space-y-3">
            <div className="h-5 w-3/4 bg-neutral-800 rounded animate-shimmer" />
            <div className="h-4 w-1/2 bg-neutral-800 rounded animate-shimmer" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkeletonCard;
