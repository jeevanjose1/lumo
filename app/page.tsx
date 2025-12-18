import AvailableToWork from "@/components/screens/home/available-to-work";
import Hello from "@/components/screens/home/hello";
import Hero from "@/components/screens/home/hero";
import Insight from "@/components/screens/home/insight";
import OurStory from "@/components/screens/home/our-story";
import RecentWorks from "@/components/screens/home/recent-works";
import Services from "@/components/screens/home/services";
import Solution from "@/components/screens/home/solution";
import WhatWeDo from "@/components/screens/home/what-we-do";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeDo />
      <AvailableToWork />
      <RecentWorks />
      <Hello />
      <OurStory />
      <Services />
      <Solution />
      <Insight />
    </main>
  );
}
