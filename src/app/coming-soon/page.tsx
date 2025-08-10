// app/coming-soon/page.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ComingSoonPage() {
  // Hitung target waktu (3 bulan dari sekarang)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 3);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Animasi Judul */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-wide mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Coming Soon
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-2xl text-gray-400 text-center max-w-lg mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Our page is currently under development. Stay tuned for our best
        experience yet!
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="bg-white text-black px-8 py-4 rounded-full text-2xl font-semibold shadow-xl flex gap-4 z-10"
      >
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </motion.div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(31)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 10 + 6,
              height: Math.random() * 10 + 6,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Parallax Flares */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-5"
        style={{ top: "-10%", left: "-20%" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-5"
        style={{ bottom: "-15%", right: "-10%" }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-sm uppercase tracking-wider">{label}</span>
    </div>
  );
}
