"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/experiences";
import SkeletonCard from "@/components/customs/SkeletonCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import Image from "next/image";
import { ProjectCard } from "@/components/projects/ProjectCard";
import ProjectFiltersSidebar from "@/components/projects/ProjectFilterSidebar";
import { ProjectCardSkeleton } from "@/components/projects/ProjectCardSkeleton";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(projects.map((p) => p.role))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.role === selectedCategory;
    const matchSearch = p.projectName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white px-4 sm:px-24 -mr-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start mb-12 gap-4"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-sm text-gray-400 max-w-2xl mt-2">
            A collection of projects I’ve worked on,
          </p>
          <p className="text-sm text-gray-400 max-w-2xl">
            including details about my role, tech stack, and timeline.
          </p>
        </div>
        <ProjectFilter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          total={filteredProjects.length}
        />
      </motion.div>

      <div className="grid grid-cols-12 gap-6 mx-2 md:mx-8">
        <AnimatePresence>
          {showFilter && (
            <ProjectFiltersSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </AnimatePresence>

        <div
          className={`${
            showFilter ? "col-span-12 md:col-span-9" : "col-span-12"
          }`}
        >
          {loading ? (
            <ProjectCardSkeleton count={4} />
          ) : filteredProjects.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              className={`grid grid-cols-1  ${
                showFilter
                  ? "sm:grid-cols-2 ml-0 md:ml-4"
                  : "lg:grid-cols-3 ml-0 md:-ml-8"
              } gap-6 `}
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={`${project.projectName}-${idx}`}
                  {...project}
                  index={idx}
                />
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
                No projects found.
              </h2>
              <p className="text-gray-500 text-sm mt-4">
                This is where your projects will be displayed. When you're
                ready,
              </p>
              <p className="text-gray-500 text-sm">
                you can add them to showcase your skills and accomplishments.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
