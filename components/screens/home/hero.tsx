import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="h-[calc(100vh-4rem)]">
      <video
        src="/hero.mp4"
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
