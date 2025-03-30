"use client";

import Character from "@/app/_components/HeroSection/Character";
import { Button } from "@/components/ui/button";
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
    color: "#7DEDFF",
    accent: "#7DEDFF",
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
    color: "#FFE156",
    accent: "#FFE156",
    accessory: "Candy Corn Hat",
    image_bg: "/character/lgbt-cat/bg.png",
    image_left_up: "/character/lgbt-cat/left-up.png",
    image_left_down: "/character/lgbt-cat/left-down.png",
    image_right_up: "/character/lgbt-cat/right-up.png",
    image_right_down: "/character/lgbt-cat/right-down.png",
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

  const character = characters[activeIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 z-10 rounded-full border-[#FFE156]"
          onClick={prevCharacter}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous character</span>
        </Button>

        <div className="w-full overflow-hidden px-10">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {characters.map((char) => (
              <div key={char.name} className="w-full flex-shrink-0 px-4">
                <div
                  className="bg-white rounded-3xl shadow-md overflow-hidden border-2"
                  style={{ borderColor: char.color }}
                >
                  <div className="flex flex-col md:flex-row">
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
                      className="md:w-1/2 aspect-square md:aspect-auto flex items-center justify-center p-8"
                      style={{ backgroundColor: `${char.color}10` }}
                    >
                      {/* Character display */}
                      <div className="relative w-64 h-44 flex items-center justify-center">
                        <Character
                          isLeftHandUp
                          isRightHandUp
                          bgSrc={char.image_bg}
                          leftUpSrc={char.image_left_up}
                          leftDownSrc={char.image_left_down}
                          rightUpSrc={char.image_right_up}
                          rightDownSrc={char.image_right_down}
                          width={300}
                          height={153}
                        />

                        {/* Character-specific accessory */}
                        {/* {index === 1 && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                            <div className="w-16 h-16 bg-[#FF5C8D] rounded-full"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-20 bg-white rounded-full">
                              <div className="absolute top-0 left-0 right-0 h-8 bg-[#FF5C8D] rounded-full"></div>
                            </div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                            <div className="w-20 h-20 rounded-full bg-[#7DEDFF] opacity-70"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#7DEDFF] opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#7DEDFF] opacity-30"></div>
                          </div>
                        )}
                        {index === 3 && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#FFE156]"></div>
                            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#FF8C42] mt-[-5px]"></div>
                            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[10px] border-l-transparent border-r-transparent border-b-white mt-[-5px]"></div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 z-10 rounded-full border-[#FFE156]"
          onClick={nextCharacter}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next character</span>
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-1">
        {characters.map((char, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors`}
            style={{
              backgroundColor: index === activeIndex ? char.accent : "#E0E0E0",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">Character {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
