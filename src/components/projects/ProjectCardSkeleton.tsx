"use client";

import { motion } from "framer-motion";

type ProjectCardSkeletonProps = {
  count?: number;
};

export const ProjectCardSkeleton = ({
  count = 4,
}: ProjectCardSkeletonProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="relative bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border h-[350px] flex flex-col justify-between"
        >
          {/* Date placeholder */}
          <span className="absolute top-4 right-4 w-24 h-4 animate-shimmer" />

          {/* Project name */}
          <div className="space-y-3 text-left">
            <div className="w-3/4 h-5 animate-shimmer" />

            {/* Client */}
            <div className="w-full h-4 animate-shimmer" />
            {/* Role */}
            <div className="w-2/3 h-4 animate-shimmer" />
            {/* Description */}
            <div className="w-full h-12 animate-shimmer" />
          </div>

          {/* Tech stack tags */}
          <div className="mt-4 text-left space-y-2">
            <div className="w-20 h-4 animate-shimmer" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-16 h-6 animate-shimmer rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
