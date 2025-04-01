import BubblesButton from "@/components/BubblesButton";
import PixelButton from "@/components/pixel-button";
import { cn } from "@/lib/utils";
import React from "react";
import TypingDemo from "./TypingDemo";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-12 md:py-20 px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 space-y-6">
        <div className="text-neutral-600/80 font-candy">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Make typing</h1>
          <h1 className="text-[#FF5C8D] font-extrabold text-6xl md:text-7xl lg:text-8xl">
            sweet
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">with Bongo Pals</h1>
        </div>
        <p className="text-lg md:text-xl max-w-md">
          Watch adorable character react to your typing in real-time with
          charming animations.
        </p>
        <div className="flex gap-4 pt-4">
          <BubblesButton
            href="#download"
            className="bg-gradient-to-t from-pink-400 to-rose-400 text-white font-medium text-lg"
          >
            Download Now
          </BubblesButton>
          <BubblesButton
            href="#demo"
            className="bg-transparent border-[#7DEDFF]"
            disableBubbles
          >
            Watch Demo
          </BubblesButton>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <TypingDemo />
        <div className="absolute -bottom-6 -right-6 bg-[#7DEDFF] p-3 rounded-full font-pixel text-sm rotate-3">
          Your typing buddy!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
