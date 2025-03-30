import PixelButton from "@/components/pixel-button";
import TypingDemo from "@/components/typing-demo";
import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-12 md:py-20 px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 space-y-6">
        <div className="inline-block bg-[#7DEDFF] px-3 py-1 rounded-full font-pixel text-sm">
          Type with a friend
        </div>
        <h1 className="font-pixel text-4xl md:text-5xl lg:text-6xl leading-tight">
          Make typing <span className="text-[#FF5C8D]">sweet</span> with Bongo
          Cat
        </h1>
        <p className="text-lg md:text-xl max-w-md">
          Watch adorable cat paws react to your typing in real-time with
          charming animations and candy-like design.
        </p>
        <div className="flex gap-4 pt-4">
          <PixelButton
            href="#download"
            className="bg-[#FF5C8D] text-white rounded-full"
          >
            Download Now
          </PixelButton>
          <PixelButton
            href="#demo"
            variant="outline"
            className="border-[#7DEDFF] text-[#333333] rounded-full"
          >
            Watch Demo
          </PixelButton>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="aspect-video bg-white rounded-3xl overflow-hidden relative shadow-lg border-4 border-[#FFE156]">
          <div className="absolute inset-0 flex items-center justify-center">
            <TypingDemo />
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 bg-[#7DEDFF] p-3 rounded-full font-pixel text-sm rotate-3">
          Your typing buddy!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
