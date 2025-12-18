"use client";

import { call, logo, message, search } from "@/shared/media/media";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {};

export default function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-center",
        isScrolled
          ? "h-16 bg-white/80 backdrop-blur-md shadow-sm text-black"
          : "h-20 bg-dark/60 backdrop-blur-sm text-white"
      )}
    >
      <div className="container h-full flex gap-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileMenu
            triggerClassName={cn(
              "transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          />
          <Image
            src={logo}
            alt="lumo"
            width={0}
            height={0}
            aria-label="logo"
            className={cn(
              "lg:w-24 lg:h-10 w-16 h-6 ml-1 transition-all duration-300",
              isScrolled ? "invert" : "invert-0"
            )}
          />
        </div>

        <nav className="hidden lg:block">
          <ul
            className={cn(
              "flex items-center gap-4 lg:gap-7 font-popins transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            {[
              "Who we are",
              "What we do",
              "Our works",
              "Industries",
              "Career",
              "Insights",
              "Contact us",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="hover:opacity-70 transition-opacity cursor-pointer text-sm font-medium"
                  aria-label={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center lg:gap-2">
          <Button
            variant="link"
            className={cn(
              "cursor-pointer transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
            size="icon-sm"
          >
            <Image
              src={search}
              alt="search"
              aria-label="search"
              className={cn(
                "lg:w-6 lg:h-6 w-5 h-5 transition-all duration-300",
                isScrolled ? "invert" : "invert-0"
              )}
            />
          </Button>
          <Button
            variant="link"
            className={cn(
              "cursor-pointer transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
            size="icon-sm"
          >
            <Image
              src={call}
              alt="call"
              aria-label="call"
              className={cn(
                "lg:w-6 lg:h-6 w-5 h-5 transition-all duration-300",
                isScrolled ? "invert" : "invert-0"
              )}
            />
          </Button>
          <Button
            variant="link"
            className={cn(
              "cursor-pointer transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
            size="icon-sm"
          >
            <Image
              src={message}
              alt="message"
              aria-label="message"
              className={cn(
                "lg:w-6 lg:h-6 w-5 h-5 transition-all duration-300",
                isScrolled ? "invert" : "invert-0"
              )}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
