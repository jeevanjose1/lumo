import { facebook, linkdin, logo, x } from "@/shared/media/media";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#090807] py-12 h-auto min-h-[600px] bg-[url('/images/footer-bg-one.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 md:px-12 flex flex-col justify-between h-full">
        <div className="w-full flex flex-col md:flex-row mb-12 lg:mb-28 mt-6 justify-between items-start md:items-center gap-8 md:gap-0">
          <h1 className="text-white font-medium text-4xl md:text-5xl lg:text-7xl leading-tight">
            Let’s talk together
          </h1>
          <div className="flex items-center border-b pb-2 w-full md:w-100 justify-between">
            <input
              className="border-0 outline-0 w-full h-full text-white placeholder:text-white/70 bg-transparent"
              type="text"
              placeholder="Enter your email"
            />
            <Button
              className="text-white pl-0 md:pl-4"
              variant={"link"}
              size={"icon-lg"}
            >
              {" "}
              <MoveRight className="size-8!" />
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full flex-col lg:flex-row justify-between gap-12 lg:gap-0">
            <div className="flex flex-col gap-6">
              <div className="mb-0 lg:mb-12">
                <Image
                  src={logo}
                  className="mb-3"
                  width={150}
                  height={150}
                  alt="logo"
                />
                <p className="font-inter text-sm text-white/70 max-w-70">
                  A joint venture is an application to collect fees from an
                  agreed plan
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href="">
                  {" "}
                  <Image width={16} height={16} src={x} alt="logo" />
                </Link>
                <Link href="">
                  {" "}
                  <Image width={16} height={16} src={linkdin} alt="logo" />
                </Link>
                <Link href="">
                  {" "}
                  <Image width={16} height={16} src={facebook} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24">
              <div className="text-white">
                <h4 className="mb-4 text-lg font-semibold ">About</h4>
                <ul>
                  <li className="flex flex-col gap-2 text-white/70">
                    <Link href="">About us</Link>
                    <Link href="">Our story</Link>
                    <Link href="">Features</Link>
                    <Link href="">Blog</Link>
                    <Link href="">Download</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h4 className="mb-4 text-lg font-semibold ">Company</h4>
                <ul>
                  <li className="flex flex-col gap-2 text-white/70">
                    <Link href="">How we work</Link>
                    <Link href="">Press Room</Link>
                    <Link href="">Features</Link>
                    <Link href="">Jobs</Link>
                    <Link href="">Community</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h4 className="mb-4 text-lg font-semibold ">Legal</h4>
                <ul>
                  <li className="flex flex-col gap-2 text-white/70">
                    <Link href="">Terms of use</Link>
                    <Link href="">Privacy policy</Link>
                    <Link href="">Features</Link>
                    <Link href="">Security Policy</Link>
                    <Link href="">Cookie Settings</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px bg-white/50 w-[90%] mx-auto mt-12 mb-6" />
          <div className="w-full flex justify-center text-center">
            <p className="text-white/80 text-sm md:text-base">
              © Copyright 2025 LUMO . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
