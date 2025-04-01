"use client";

import Character from "@/app/_components/HeroSection/Character";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const characters = [
  {
    name: "Classic Cat",
    description:
      "The original typing buddy. Bongo's tiny paws dance across your keyboard with enthusiasm.",
    color: "#FF5C8D",
    accent: "#FF5C8D",
    accessory: "None",
    image_bg: "/character/cat/bg.png",
    image_left_up: "/character/cat/left-up.png",
    image_left_down: "/character/cat/left-down.png",
    image_right_up: "/character/cat/right-up.png",
    image_right_down: "/character/cat/right-down.png",
  },
  {
    name: "Black Cat",
    description:
      "Sweet as can be! Lollipop Bongo brings sugary delight to your typing experience.",
    color: "#FF8C42",
    accent: "#FF8C42",
    accessory: "Lollipop Hat",
    image_bg: "/character/black-cat/bg.png",
    image_left_up: "/character/black-cat/left-up.png",
    image_left_down: "/character/black-cat/left-down.png",
    image_right_up: "/character/black-cat/right-up.png",
    image_right_down: "/character/black-cat/right-down.png",
  },
  {
    name: "Yellow Cat",
    description:
      "Pop, pop, pop! Bubblegum Bongo adds a chewy, colorful twist to your typing sessions.",
    color: "#70C0E7",
    accent: "#70C0E7",
    accessory: "Bubble Blower",
    image_bg: "/character/yellow-cat/bg.png",
    image_left_up: "/character/yellow-cat/left-up.png",
    image_left_down: "/character/yellow-cat/left-down.png",
    image_right_up: "/character/yellow-cat/right-up.png",
    image_right_down: "/character/yellow-cat/right-down.png",
  },
  {
    name: "LGBT Cat",
    description:
      "A seasonal favorite! Candy Corn Bongo brings festive typing fun all year round.",
    color: "#D4ADCF",
    accent: "#D4ADCF",
    accessory: "Candy Corn Hat",
    image_bg: "/character/lgbt-cat/bg.png",
    image_left_up: "/character/lgbt-cat/left-up.png",
    image_left_down: "/character/lgbt-cat/left-down.png",
    image_right_up: "/character/lgbt-cat/right-up.png",
    image_right_down: "/character/lgbt-cat/right-down.png",
  },
  {
    name: "Classic Otter",
    description:
      "A seasonal favorite! Candy Corn Bongo brings festive typing fun all year round.",
    color: "#FFE156",
    accent: "#FFE156",
    accessory: "Candy Corn Hat",
    image_bg: "/character/otter/bg.png",
    image_left_up: "/character/otter/left-up.png",
    image_left_down: "/character/otter/left-down.png",
    image_right_up: "/character/otter/right-up.png",
    image_right_down: "/character/otter/right-down.png",
  },
];

export default function CharacterShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCharacter = () => {
    setActiveIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setActiveIndex(
      (prev) => (prev - 1 + characters.length) % characters.length,
    );
  };

  return (
    <section className="relative w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="absolute left-0 z-10 w-10 h-full bg-white/5 flex items-center justify-center backdrop-blur-[1.5px]" />
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 z-20 rounded-full bg-white shadow-md border-gray-300"
          onClick={prevCharacter}
          aria-label="Previous character"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="absolute right-0 z-10 w-10 h-full bg-white/5 flex items-center justify-center backdrop-blur-[1.5px]" />
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 z-20 rounded-full bg-white shadow-md border-gray-300"
          onClick={nextCharacter}
          aria-label="Next character"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="w-full overflow-hidden px-10">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {characters.map((char, index) => (
              <div key={char.name} className="w-full flex-shrink-0 px-4">
                <div
                  className="bg-white rounded-3xl shadow-md overflow-hidden border-2 flex flex-col md:flex-row h-full"
                  style={{ borderColor: char.color }}
                >
                  <div className="md:w-1/2 p-6">
                    <h3
                      className="font-pixel text-2xl mb-2"
                      style={{ color: char.accent }}
                    >
                      {char.name}
                    </h3>
                    <p className="mb-4 text-[#333333]">{char.description}</p>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-medium text-[#333333]">
                        Accessory:
                      </span>
                      <span
                        className="px-2 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${char.color}20`,
                          color: char.accent,
                        }}
                      >
                        {char.accessory}
                      </span>
                    </div>
                  </div>
                  <div
                    className="md:w-1/2 aspect-auto flex items-center justify-center p-8"
                    style={{ backgroundColor: `${char.color}10` }}
                  >
                    <div className="w-full h-20 flex items-center justify-center xs:h-64 xs:bg-black">
                      <div className="relative w-full h-full mt-12">
                        <div
                          className={cn(
                            "absolute inset-0",
                            "xs:-translate-x-1/10 sm:-translate-x-1/9 md:-translate-x-1/40 lg:-translate-x-1/20 xl:-translate-x-1/5",
                            "xs:-translate-y-3/8 sm:-translate-y-1/4 md:-translate-y-1/3 lg:-translate-y-1/4",
                          )}
                        >
                          <Character
                            isLeftHandUp
                            isRightHandUp
                            bgSrc={char.image_bg}
                            leftUpSrc={char.image_left_up}
                            leftDownSrc={char.image_left_down}
                            rightUpSrc={char.image_right_up}
                            rightDownSrc={char.image_right_down}
                            className="h-full xs:h-32 sm:h-48 md:h-36 lg:h-48 xl:h-48"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-1">
        {characters.map((char, index) => (
          <button
            key={`dot-button-${char.name}`}
            type="button"
            className={"w-3 h-3 rounded-full transition-colors"}
            style={{
              backgroundColor: index === activeIndex ? char.accent : "#E0E0E0",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">Character {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
