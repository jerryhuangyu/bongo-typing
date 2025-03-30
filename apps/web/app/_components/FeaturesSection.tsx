import { PaletteIcon, StarIcon, ZapIcon } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-[#FCFCFC] to-[#FFE156]/20 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl mb-4">
            Typing has never been this sweet
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Bongo Typing transforms your keyboard into a candy playground for an
            adorable cat companion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#FF5C8D]">
            <div className="w-12 h-12 bg-[#FF5C8D]/20 rounded-full flex items-center justify-center mb-4">
              <ZapIcon className="w-6 h-6 text-[#FF5C8D]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Real-time Reactions</h3>
            <p>
              Watch Bongo's tiny paws mimic your keypresses instantly as you
              type.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#7DEDFF]">
            <div className="w-12 h-12 bg-[#7DEDFF]/20 rounded-full flex items-center justify-center mb-4">
              <StarIcon className="w-6 h-6 text-[#7DEDFF]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Collectible Items</h3>
            <p>
              Unlock cute hats, accessories, and special animations as you
              improve your typing skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#FFE156]">
            <div className="w-12 h-12 bg-[#FFE156]/20 rounded-full flex items-center justify-center mb-4">
              <PaletteIcon className="w-6 h-6 text-[#FFE156]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Light & Efficient</h3>
            <p>
              Minimal system resource usage means your typing buddy won't slow
              down your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
