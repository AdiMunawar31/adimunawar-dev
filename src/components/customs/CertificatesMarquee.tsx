"use client";

import Marquee from "react-fast-marquee";
import { certificateList } from "@/lib/data/certificates";
import Image from "next/image";

export const CertificatesMarquee = () => {
  const half = Math.ceil(certificateList.length / 2);
  const firstRow = certificateList.slice(0, half);
  const secondRow = certificateList.slice(half);

  return (
    <div className="space-y-10 py-10 mt-24 -mx-60 relative">
      {/* Fade Mask Samping */}
      {/* <div className="pointer-events-none absolute inset-0 z-10 flex justify-between items-center">
        <div className="w-20 h-full bg-gradient-to-r from-muted via-muted to-transparent" />
        <div className="w-20 h-full bg-gradient-to-l from-muted via-muted to-transparent" />
      </div> */}

      {/* Row 1 - Left to Right */}
      <div className="relative overflow-hidden">
        <Marquee speed={35} pauseOnHover>
          {firstRow.map((cert, idx) => (
            <div
              key={`cert-1-${idx}`}
              className="group mx-2 relative w-[300px] h-[210px] rounded-md overflow-hidden border shadow-md"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient full fade on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Centered text on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <span className="text-lg font-semibold text-cyan-300">
                  {cert.alt}
                </span>
                <span className="text-sm text-white mt-1">{cert.category}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative overflow-hidden">
        <Marquee speed={30} direction="right" pauseOnHover>
          {secondRow.map((cert, idx) => (
            <div
              key={`cert-2-${idx}`}
              className="group mx-2 relative w-[300px] h-[210px] rounded-md overflow-hidden border shadow-md"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient full fade on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Centered text on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <span className="text-lg font-semibold text-cyan-300">
                  {cert.alt}
                </span>
                <span className="text-sm text-white mt-1">{cert.category}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
