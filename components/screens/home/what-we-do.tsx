"use client";
import { motion, AnimatePresence } from "framer-motion";
import { whatWeDo } from "@/shared/media/media";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {};

const words = ["Think", "Execute", "Build"];

export default function WhatWeDo({}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-dark flex items-center min-h-[600px] py-10 lg:py-0 lg:h-150">
      <div className="container mx-auto gap-10 lg:gap-24 flex flex-col lg:flex-row px-4 lg:px-24 items-center">
        <Image
          src={whatWeDo}
          alt="what we do"
          width={0}
          height={0}
          className="w-full max-w-[300px] lg:w-90 lg:max-w-none"
        />

        <div className="text-white flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="grid h-[250px] w-full overflow-hidden relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1.2 }}
                className="col-start-1 row-start-1 flex flex-col items-center lg:items-start justify-center h-full w-full"
              >
                <h2 className="font-popins mb-2 text-sm lg:text-base">
                  WHAT WE DO
                </h2>
                <h1 className="font-plus-jakarta-sans font-semibold mb-4 text-5xl lg:text-9xl text-white">
                  {words[index]}
                </h1>
                <p className="font-popins  max-w-80 lg:max-w-130 text-sm lg:text-base mx-auto lg:mx-0">
                  Expert guidance to help you choose wisely, adapt quickly, and
                  build stronger, more resilient systems for lasting success
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center max-w-full lg:max-w-2xl mt-4 lg:mt-6 justify-center lg:justify-end w-full">
            <Link
              href="/"
              className="font-popins flex items-center gap-2 hover:gap-4 transition-all z-10 relative"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
