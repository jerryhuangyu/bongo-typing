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
            Bongo Typing transforms your everyday typing into a delightful
            experience with adorable companion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#FF5C8D]">
            <div className="w-12 h-12 bg-[#FF5C8D]/20 rounded-full flex items-center justify-center mb-4">
              <ZapIcon className="w-6 h-6 text-[#FF5C8D]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Real-time Reactions</h3>
            <p>
              Bongo’s paws move with every keystroke — typing feels alive and
              adorable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#7DEDFF]">
            <div className="w-12 h-12 bg-[#7DEDFF]/20 rounded-full flex items-center justify-center mb-4">
              <StarIcon className="w-6 h-6 text-[#7DEDFF]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Collectible Goodies</h3>
            <p>
              Unlock hats, sparkles, and more as you type. Sweet rewards await!
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#FFE156]">
            <div className="w-12 h-12 bg-[#FFE156]/20 rounded-full flex items-center justify-center mb-4">
              <PaletteIcon className="w-6 h-6 text-[#FFE156]" />
            </div>
            <h3 className="font-pixel text-xl mb-2">Privacy First</h3>
            <p>
              No tracking. All data stays on your device. Just fun, no fuss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
