import { Button } from "@/components/ui/button";

type Props = {};

export default function Solution({}: Props) {
  return (
    <section className="bg-black h-140 py-12 ">
      <div className="container flex items-center justify-center h-full relative w-full">
        <div className="absolute inset-0 h-full w-full md:w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <video
            className=" object-cover h-full w-full"
            src="/solution.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="relative flex flex-col items-center z-10 ">
          <h1 className="font-inter text-3xl md:text-5xl  max-w-100  text-center md:leading-13 text-white mb-6">
            Perfect solution for your business
          </h1>
          <p className="text-white inter max-w-100 text-center mb-6">
            We don’t just make brands pretty — we craft smart design that fuels
            real business growth.
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
      </div>
    </section>
  );
}
