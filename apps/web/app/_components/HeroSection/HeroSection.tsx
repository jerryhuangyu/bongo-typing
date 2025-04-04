import BubblesButton from "@/components/BubblesButton";
import { cn } from "@/lib/utils";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#FCFCFC] to-[#F4F4F4] w-full pt-12 pb-24">
      <div className="container mx-auto lg:w-1/2 space-y-6 px-10 lg:px-20">
        <div className="text-neutral-600/80 font-candy">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Make typing</h1>
          <h1
            className="text-[#FF5C8D] font-extrabold text-6xl tracking-wide drop-shadow-lg md:text-7xl lg:text-8xl"
            style={{
              textShadow: `
              4px 0 var(--color-neutral-600),
              -4px 0 var(--color-neutral-600),
              0 4px var(--color-neutral-600),
              0 -4px var(--color-neutral-600),
              4px 4px var(--color-neutral-600),
              -4px 4px var(--color-neutral-600),
              4px -4px var(--color-neutral-600),
              -4px -4px var(--color-neutral-600)
              `,
            }}
          >
            sweet
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">with Bongo Pals</h1>
        </div>
        <p className="text-lg md:text-xl max-w-md">
          Watch adorable character react to your typing in real-time with
          charming animations.
        </p>
        <div className="flex flex-col xs:flex-row gap-4 pt-4">
          <BubblesButton
            href="#download"
            className={cn(
              "bg-gradient-to-t from-pink-400 to-rose-400 text-white font-medium text-lg",
              "px-5 py-2",
              "lg:px-8 lg:py-3",
            )}
          >
            Download Now
          </BubblesButton>
          <BubblesButton
            href="#demo"
            className={cn(
              "bg-transparent border-[#7DEDFF]",
              "px-5 py-2",
              "lg:px-8 lg:py-3",
            )}
            disableBubbles
          >
            Watch Demo
          </BubblesButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
