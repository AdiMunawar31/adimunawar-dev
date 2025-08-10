import { motion, useAnimation, PanInfo } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function FloatingWhatsAppButton() {
  const controls = useAnimation();
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Ganti React.PointerEvent jadi DOM native events sesuai error:
  const handleDragStart = (
    event: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo
  ) => {
    dragStartRef.current = { x: info.point.x, y: info.point.y };
    setDragging(false);
  };

  const handleDrag = (
    event: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo
  ) => {
    const distanceX = Math.abs(info.point.x - dragStartRef.current.x);
    const distanceY = Math.abs(info.point.y - dragStartRef.current.y);
    if (distanceX > 5 || distanceY > 5) {
      setDragging(true);
    }
  };

  const handleDragEnd = () => {
    controls.start({
      transition: { type: "spring", stiffness: 300 },
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <motion.a
        href="https://wa.me/6281563754507"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        drag
        dragElastic={0.2}
        dragConstraints={containerRef}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ x: 0, y: 0 }}
        className="absolute bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg cursor-pointer pointer-events-auto"
        style={{ touchAction: "none" }}
      >
        <Image
          src="/icons/WhatsApp.svg"
          alt="WhatsApp Icon"
          height={30}
          width={30}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </motion.a>
    </div>
  );
}
