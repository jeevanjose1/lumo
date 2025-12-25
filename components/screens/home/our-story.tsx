import { Button } from "@/components/ui/button";
import { ourStory } from "@/shared/media/media";
import Image from "next/image";

type Props = {};

export default function OurStory({}: Props) {
  return (
    <section className="bg-dark-violet w-full h-auto lg:h-140">
      <div className="flex flex-col-reverse lg:flex-row h-full">
        <div className="flex-1 flex gap-6 lg:gap-8 flex-col justify-center px-6 py-12 lg:pl-20 lg:py-0 lg:pr-10">
          <h1 className="text-4xl lg:text-6xl font-inter text-white font-medium">
            Our Story
          </h1>
          <p className="text-white text-base lg:text-lg font-inter max-w-lg">
            Lumoo Global began in Kochi with a simple idea: developing digital
            solutions that are effective and active in empowering the way we do
            business. What originally began with an ambitious tiny team grew to
            become a design studio, branding and digital lab. We are committed
            to straightforward communication, clean technology and the bravery
            to try something new.
          </p>
          <div className="max-w-min px-3 py-2! bg-gray-one/40 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 scale-100">
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
        <div className="w-full h-[300px] lg:h-full lg:w-1/2 relative">
          <Image
            src={ourStory}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
            alt="our-story"
          />
        </div>
      </div>
    </section>
  );
}
