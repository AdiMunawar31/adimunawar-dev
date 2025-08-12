"use client";

import CertificateCard from "@/components/certificates/CertificateCard";
import CertificateDialog from "@/components/certificates/CertificateDialog";
import CertificateFilters from "@/components/certificates/CertificateFilters";
import CertificateHeader from "@/components/certificates/CertificateHeader";
import SkeletonCard from "@/components/customs/SkeletonCard";
import { allCertificateList } from "@/lib/data/certificates";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState<
    null | (typeof allCertificateList)[0]
  >(null);

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
    <div className="min-h-screen bg-white dark:bg-black text-white px-4 sm:px-8 md:px-16 py-10">
      <CertificateHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        total={allCertificateList.length}
      />

      <div className="grid grid-cols-12 gap-6 mx-2 md:mx-8">
        <AnimatePresence>
          {showFilter && (
            <CertificateFilters
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
            <SkeletonCard count={6} />
          ) : filteredCertificates.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                showFilter ? "lg:grid-cols-3" : "lg:grid-cols-4"
              } gap-6 ml-0 md:ml-4`}
            >
              {filteredCertificates.map((cert, index) => (
                <CertificateCard
                  key={`${cert.alt}-${index}`}
                  cert={cert}
                  onClick={() => setSelectedCert(cert)}
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
                No certificates found.
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                This section is currently empty. Certificates will be displayed
                here once available.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <CertificateDialog
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
