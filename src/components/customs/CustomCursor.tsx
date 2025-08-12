"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleHover = () => cursor.classList.add("cursor-hover");
    const removeHover = () => cursor.classList.remove("cursor-hover");

    document.addEventListener("mousemove", moveCursor);
    document
      .querySelectorAll("a, button, .cursor-hover-target")
      .forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", removeHover);
      });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-black rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out z-[9999]"
    />
  );
}
