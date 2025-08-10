"use client";

import { motion, Variants } from "framer-motion";
import { D2YTag } from "../base/D2YTag";

type ExperienceCardProps = {
  projectName: string;
  client: string;
  role: string;
  description: string;
  techStack: string[];
  dateRange: string;
  index: number;
};

const cardVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
});

export const ExperienceCard = ({
  projectName,
  client,
  role,
  description,
  techStack,
  dateRange,
  index,
}: ExperienceCardProps) => {
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <motion.div
      className="relative bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border h-full flex flex-col justify-between"
      variants={cardVariants(direction)}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="absolute top-4 right-4 text-sm text-muted-foreground">
        {dateRange}
      </span>

      <div className="space-y-2 text-left">
        <h3 className="text-lg font-semibold">{projectName}</h3>

        <p>
          <span className="font-medium text-black dark:text-white">
            Client:
          </span>{" "}
          <span
            className="text-neutral-700 dark:text-neutral-300"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            {client}
          </span>
        </p>

        <p>
          <span className="font-medium text-black dark:text-white">Role:</span>{" "}
          <span
            className="text-neutral-700 dark:text-neutral-300"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            {role}
          </span>
        </p>

        <p>
          <span className="font-medium text-black dark:text-white">
            Description:
          </span>{" "}
          <span
            className="text-neutral-700 dark:text-neutral-300"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            {description}
          </span>
        </p>
      </div>

      <div className="mt-4 text-left">
        <span className="font-medium block mb-1">Tech Stack:</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, i) => (
            <D2YTag key={i}>{tech}</D2YTag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
