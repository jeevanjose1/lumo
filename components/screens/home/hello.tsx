"use client";
import {
  Code,
  LayoutGrid,
  Megaphone,
  Paintbrush,
  Smartphone,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {};

const Badge = ({
  icon: Icon,
  label,
  color,
  textColor = "text-white",
  className,
  style,
  initialX,
  delay,
}: {
  icon: any;
  label: string;
  color: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
  initialX: number;
  delay: number;
}) => (
  <motion.div
    initial={{ x: initialX, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      delay,
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    }}
    className={cn(
      "absolute flex items-center gap-3 bg-white px-3 py-2 rounded-full border-6 border-gray-one/15", // Removed animate-float to avoid conflict, or handle carefuly. Let's stick to entrance first.
      className
    )}
    style={style}
  >
    <div
      className={cn(
        "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center",
        color,
        textColor
      )}
    >
      <Icon size={18} className="md:w-5 md:h-5" />
    </div>
    <span className="font-semibold text-dark text-xs md:text-sm whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

export default function Hello({}: Props) {
  return (
    <section className="relative w-full bg-light-gray overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative flex flex-col items-center min-h-[350px] md:min-h-[400px]">
        <div className="flex items-center gap-4 text-gray-one md:mt-16 mb-8 md:mb-12">
          <div className="h-px w-12 bg-gray-one"></div>
          <span className="font-popins text-lg md:text-xl">Hello!</span>
          <div className="h-px w-12 bg-gray-one"></div>
        </div>

        <div className="max-w-4xl text-center z-10">
          <h2 className="text-3xl md:text-3xl lg:text-4xl max-w-170 font-semibold leading-tight font-plus-jakarta-sans bg-linear-to-r from-black from-50% to-black/40 bg-clip-text text-transparent">
            We help brands grow with standout design, clear branding, and
            content that drives results.
          </h2>
        </div>

        <Badge
          icon={LayoutGrid}
          label="Design System"
          color="bg-orange-500"
          className="left-4 top-10 md:left-10 md:top-20 -rotate-12 hidden lg:flex"
          initialX={-100}
          delay={0.1}
        />
        <Badge
          icon={Smartphone}
          label="Ux Design"
          color="bg-gray-800"
          className="left-8 md:left-24 top-1/2 -translate-y-1/2 hidden lg:flex"
          initialX={-100}
          delay={0.3}
        />
        <Badge
          icon={Megaphone}
          label="Marketing"
          color="bg-blue-500"
          className="left-10 bottom-10 md:left-20 md:bottom-20 rotate-12 hidden lg:flex"
          initialX={-100}
          delay={0.5}
        />

        <Badge
          icon={LayoutGrid}
          label="Design System"
          color="bg-green-500"
          className="right-4 top-10 md:right-10 md:top-20 rotate-12 hidden lg:flex"
          initialX={100}
          delay={0.2}
        />
        <Badge
          icon={Code}
          label="Development"
          color="bg-pink-500"
          className="right-8 md:right-24 top-1/2 -translate-y-1/2 hidden lg:flex"
          initialX={100}
          delay={0.4}
        />
        <Badge
          icon={Paintbrush}
          label="Ux Design"
          color="bg-yellow-400"
          className="right-10 bottom-10 md:right-20 md:bottom-20 -rotate-12 hidden lg:flex"
          initialX={100}
          delay={0.6}
        />
      </div>
    </section>
  );
}
