import PixelButton from "@/components/pixel-button";
import { HeartIcon } from "lucide-react";
import React from "react";
import CharacterShowcase from "./CharacterShowcase";

const ShowcaseSection = () => {
  return (
    <section id="characters" className="container mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-3xl md:text-4xl mb-4">
          Get Your Typing Buddy
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Personalize your Bongo Pal with cute hats, sparkles, and fun reactions
        </p>
      </div>

      <CharacterShowcase />

      <div className="text-center mt-12">
        <PixelButton
          href="#download"
          className="bg-[#FF5C8D] text-white rounded-full"
        >
          <HeartIcon className="w-4 h-4 mr-2" />
          Buy me a coffee
        </PixelButton>
      </div>
    </section>
  );
};

export default ShowcaseSection;
