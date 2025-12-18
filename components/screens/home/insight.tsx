import { Button } from "@/components/ui/button";
import { insightOne, insightThree, insightTwo } from "@/shared/media/media";
import Image, { StaticImageData } from "next/image";

type Props = {};

type InsightCardProps = {
  image: StaticImageData;
  title: string;
  date: string;
  readTime: string;
};

const InsightCard = ({ image, title, date, readTime }: InsightCardProps) => {
  return (
    <div className="w-full h-full flex flex-col group cursor-pointer">
      <div className="mb-4 overflow-hidden ">
        <Image
          src={image}
          alt="insight"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-60 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="font-inter text-xs md:text-sm text-gray-one flex w-full justify-between items-center mb-3">
        <p>{readTime}</p>
        <p>{date}</p>
      </div>
      <h1 className="font-inter font-medium text-lg md:text-xl group-hover:underline underline-offset-4 decoration-1">
        {title}
      </h1>
    </div>
  );
};

export default function Insight({}: Props) {
  const data = [
    {
      image: insightOne,
      title: "Elevating User Experience Through Thoughtful Design",
      date: "Oct 22 , 2025",
      readTime: "9 min read",
    },
    {
      image: insightTwo,
      title: "The Impact of AI on Future UX Design",
      date: "Oct 22 , 2025",
      readTime: "9 min read",
    },
    {
      image: insightThree,
      title: "The Rise of Quantum Computing in Modern Tech",
      date: "Oct 22 , 2025",
      readTime: "9 min read",
    },
  ];
  return (
    <section className="container px-4 md:px-12 py-16 md:py-24">
      <div className="flex w-full flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex items-center gap-4 text-gray-one">
            <div className="h-px w-8 md:w-12 bg-gray-one"></div>
            <span className="font-popins text-lg md:text-xl">Insights </span>
            <div className="h-px w-8 md:w-12 bg-gray-one"></div>
          </div>
        </div>
        <h1 className="font-inter font-medium text-3xl md:text-5xl text-center mb-10 md:mb-16">
          Key Performance Highlights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full ">
          {data.map((item, index) => {
            return (
              <InsightCard
                key={index}
                image={item.image}
                title={item.title}
                date={item.date}
                readTime={item.readTime}
              />
            );
          })}
        </div>
        <div className="mt-8 lg:mt-16 max-w-min mx-auto px-3 py-2! bg-white text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 scale-90 lg:scale-100">
          <Button className="px-3 py-6! shadow-md bg-black text-white rounded-full flex items-center gap-3 hover:bg-gray-900 transition-all group">
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs group-hover:rotate-12 transition-transform">
              ★
            </span>
            <span className="font-medium">Explore All Insights </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
