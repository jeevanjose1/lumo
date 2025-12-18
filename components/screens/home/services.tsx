import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
import React from "react";

type Props = {};
type CardProp = {
  title: string;
  description: string;
  number: number;
};

const ServiceCard = ({ title, description, number }: CardProp) => {
  return (
    <div className="rounded-lg  shadow-xl flex p-6  flex-col justify-between h-full ring-12 ring-gray-one/15">
      <h1 className="font-inter text-6xl ">{number}</h1>
      <div className="mb-10">
        <h2 className="font-inter text-xl font-medium mb-2">{title}</h2>
        <p className="text-sm font-inter">{description}</p>
      </div>
    </div>
  );
};

export default function Services({}: Props) {
  const data = [
    {
      title: "Web Designing",
      description:
        "We uncover what drives your brand through purpose clarity audience insight and business focus.",
    },
    {
      title: "Web Development",
      description:
        "We uncover what drives your brand through purpose clarity audience insight and business focus.",
    },
    {
      title: "Digital Marketing",
      description:
        "We uncover what drives your brand through purpose clarity audience insight and business focus.",
    },
    {
      title: "UI/UX Design",
      description:
        "We uncover what drives your brand through purpose clarity audience insight and business focus.",
    },
  ];
  return (
    <section className=" bg-light-gray py-16">
      <div className="container px-4 md:px-12 w-full">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex items-center gap-4 text-gray-one">
            <div className="h-px w-8 md:w-12 bg-gray-one"></div>
            <span className="font-popins text-lg md:text-xl">Services</span>
            <div className="h-px w-8 md:w-12 bg-gray-one"></div>
          </div>
        </div>
        <div className="flex w-full justify-center mb-10 md:mb-16">
          <h1 className="font-inter text-3xl md:text-[40px] font-medium text-center max-w-150 leading-tight">
            Perfect Solution For Your Business
          </h1>
        </div>
        <div className="grid container grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full h-auto justify-center mb-12">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "md:translate-y-8" : ""
                } flex flex-col h-90`}
              >
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  number={index + 1}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-8 lg:mt-24 max-w-min mx-auto px-3 py-2! bg-white text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 scale-90 lg:scale-100">
          <Button className="px-3 py-6! shadow-md bg-black text-white rounded-full flex items-center gap-3 hover:bg-gray-900 transition-all group">
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs group-hover:rotate-12 transition-transform">
              ★
            </span>
            <span className="font-medium">Explore Our Services</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
