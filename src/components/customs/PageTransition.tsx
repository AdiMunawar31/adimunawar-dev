"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => onFinish(), 800);
        }, 300);
      }
      setProgress(current);
    }, 20);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center z-[9999]"
        >
          {/* Nama di tengah */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12"
          >
            {"<Adi Munawar />"}
          </motion.div>

          {/* Progress bar section */}
          <div className="absolute bottom-16 left-0 right-0 px-8">
            {/* Top labels */}
            <div className="flex justify-between items-center mb-2">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold tracking-widest"
              >
                LOADING...
              </motion.span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-bold"
              >
                {progress}%
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden relative shadow-md">
              {/* Progress putih */}
              <motion.div
                className="h-full bg-black dark:bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Copyright */}
            <div className="mt-3 text-center text-xs tracking-widest font-medium">
              COPYRIGHT © {new Date().getFullYear()} ADI MUNAWAR. ALL RIGHTS
              RESERVED
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
