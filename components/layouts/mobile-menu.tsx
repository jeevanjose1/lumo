"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logo, x } from "@/shared/media/media";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  triggerClassName?: string;
};

const menuItems = [
  "Who we are",
  "What we do",
  "Our works",
  "Industries",
  "Career",
  "Insights",
  "Contact us",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function MobileMenu({ triggerClassName }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "lg:hidden px-0! hover:bg-transparent",
            triggerClassName
          )}
        >
          <Menu className="h-9 w-9" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full h-full bg-[#090807] border-none p-0 text-white flex flex-col"
      >
        <SheetHeader className="p-6 flex flex-row items-center justify-between border-b border-white/10">
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <Image src={logo} alt="lumo" width={100} height={40} />
          <div onClick={() => setIsOpen(false)} className="cursor-pointer p-2">
            <X className="text-white w-8 h-8" />
          </div>
        </SheetHeader>

        <div className="flex-1 flex flex-col justify-center px-6">
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col my-4 gap-6"
          >
            {menuItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-inter font-medium  text-4xl text-white/90 hover:text-white transition-colors block"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>

        <div className="p-8 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <p className="text-white/50 text-sm font-inter">Get in touch</p>
            <a href="mailto:hello@lumo.com" className="text-xl font-medium">
              hello@lumo.com
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
