"use client";

import {
  recentWorkFour,
  recentWorkOne,
  recentWorkThree,
  recentWorkTwo,
} from "@/shared/media/media";
import { LayoutPanelLeft } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const images = [
  recentWorkOne,
  recentWorkTwo,
  recentWorkThree,
  recentWorkFour,
  recentWorkOne,
  recentWorkTwo,
  recentWorkThree,
  recentWorkFour,
];

export default function RecentWorks({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateValue, setRotateValue] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angle =
      Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

    setRotateValue(angle + 90);
  };

  const handleMouseLeave = () => {
    setRotateValue(0);
  };

  return (
    <section className="xl:h-200 h-180 bg-light-gray pb-12 py-12">
      <div className="rounded-lg container max-w-285 h-full bg-white p-4 lg:p-6">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-black relative rounded-lg overflow-hidden p-4 lg:p-8 h-full min-h-[500px] w-full group"
        >
          <div className="absolute inset-0 z-10 bg-black/50 h-full w-full pointer-events-none"></div>

          <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full flex items-center justify-center bg-white shadow-2xl z-20 scale-75 lg:scale-100">
                <LayoutPanelLeft size={32} className="text-black" />
              </div>

              <motion.div
                animate={{ rotate: rotateValue }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  mass: 0.8,
                }}
                className="absolute w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] flex justify-center items-start z-10"
              >
                <h2 className="bg-black font-popins rounded-full px-4 lg:px-5 py-2 text-white border border-white/20 shadow-xl whitespace-nowrap text-center text-xs lg:text-sm mt-3 lg:mt-4">
                  See Recent Works
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="w-full h-full rounded-sm grid grid-cols-2 gap-4 overflow-hidden z-0">
            <div className="relative h-full overflow-hidden">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-col gap-4 w-full"
              >
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="relative aspect-square w-full rounded-sm overflow-hidden shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`recent-work-${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="relative h-full overflow-hidden">
              <motion.div
                animate={{ y: ["-50%", "0%"] }} // Scroll Up for variety, or same direction
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-col gap-4 w-full"
              >
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="relative aspect-square w-full rounded-sm overflow-hidden shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`recent-work-${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
