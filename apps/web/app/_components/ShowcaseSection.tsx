import CharacterShowcase from "@/components/character-showcase";
import PixelButton from "@/components/pixel-button";
import { HeartIcon } from "lucide-react";
import React from "react";

const ShowcaseSection = () => {
  return (
    <section id="characters" className="container mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-3xl md:text-4xl mb-4">
          Customize Your Bongo Cat
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Personalize your typing companion with different candy-themed
          accessories
        </p>
      </div>

      <CharacterShowcase />

      <div className="text-center mt-12">
        <PixelButton
          href="#download"
          className="bg-[#FF5C8D] text-white rounded-full"
        >
          <HeartIcon className="w-4 h-4 mr-2" />
          Get Your Typing Buddy
        </PixelButton>
      </div>
    </section>
  );
};

export default ShowcaseSection;
