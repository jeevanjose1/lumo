"use client";

import { Button } from "@/components/ui/button";
import { availableImgOne, availableToWorks } from "@/shared/media/media";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function AvailableToWork({}: Props) {
  return (
    <section className="relative h-[500px] lg:h-180 py-12 lg:py-24 bg-no-repeat bg-cover overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-black/50 h-full w-full">
        <Image
          src={availableToWorks}
          alt="available-to-work"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full container flex justify-center relative z-10">
        <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-white scale-90 lg:scale-100">
          <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
          <h2 className="font-popins text-sm lg:text-base">
            Available to work
          </h2>
        </div>
      </div>

      <div className="relative container z-10 w-full flex flex-col items-center justify-center mt-8 lg:mt-12 text-center text-dark px-4">
        <div className="flex items-center gap-2 lg:gap-8 text-4xl sm:text-6xl md:text-8xl font-inter font-bold flex-wrap justify-center leading-none">
          <motion.span
            whileHover={{ scale: 1.05, x: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-default"
          >
            Brands
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-12 sm:w-24 sm:h-20 md:w-30 border border-black md:h-30 bg-gray-200 rounded-lg overflow-hidden relative inline-block mx-1 lg:mx-2 cursor-pointer shadow-lg"
          >
            {/* Placeholder for Monitor Image */}
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              <Image
                src={availableImgOne}
                width={0}
                height={0}
                className="object-cover w-full h-full"
                alt="available-img-one"
              />
            </div>
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05, color: "#111" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-one cursor-default"
          >
            Thrive
          </motion.span>
        </div>

        <div className="flex items-center gap-2 lg:gap-8 text-4xl sm:text-6xl md:text-8xl font-inter font-bold flex-wrap justify-center mt-2 lg:mt-4 leading-none">
          <motion.span
            whileHover={{ scale: 1.05, color: "#111" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-one cursor-default"
          >
            Build
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 0 }}
            initial={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-10 sm:w-24 sm:h-16 md:w-32 md:h-24 bg-black rounded-xl overflow-hidden relative inline-block mx-1 lg:mx-2 cursor-pointer shadow-lg"
          >
            {/* Placeholder for Lumo Card Image */}
            <div className="w-full rotate-15 text-[10px] sm:text-xl whitespace-nowrap h-full flex items-center justify-center text-white font-popins font-bold">
              LUMO GLOBAL
            </div>
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-default"
          >
            With Us
          </motion.span>
        </div>

        <p className="mt-8 lg:mt-12 max-w-xs sm:max-w-md text-center text-black/70 font-inter text-sm lg:text-base underline-offset-4 cursor-pointer hover:text-black transition-colors">
          We don{"'"}t just make brands pretty — we craft smart design that
          fuels real business growth.
        </p>
        <div className="mt-8 lg:mt-10 px-3 py-2! bg-white text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 scale-90 lg:scale-100">
          <Button className="px-3 py-6! shadow-md bg-black text-white rounded-full flex items-center gap-3 hover:bg-gray-900 transition-all group">
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs group-hover:rotate-12 transition-transform">
              ★
            </span>
            <span className="font-medium">Book a Meeting</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
