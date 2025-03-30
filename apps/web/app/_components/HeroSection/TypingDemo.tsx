"use client";

import { useTypingTextEffect } from "@/hook/useTypingTextEffect";
import Character from "./Character";

const phrases = [
  "Type with your bongo friend.",
  "Pals loves to type with you!",
  "Watch the paws go tap tap tap...",
];

export default function TypingDemo() {
  const { text } = useTypingTextEffect(phrases);

  const isRightHandUp = text.length % 2 === 0;
  const isLeftHandUp = text.length % 2 === 1;

  return (
    <div className="aspect-video bg-white rounded-3xl overflow-hidden relative shadow-lg border-4 border-[#FFE156]">
      {/* background */}
      <div
        className="absolute w-full h-full opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FF5C8D 0px, #FF5C8D 10px, 
            transparent 10px, transparent 20px, #7DEDFF 20px, #7DEDFF 30px, 
            transparent 30px, transparent 40px, #FFE156 40px, #FFE156 50px, 
            transparent 50px, transparent 60px)`,
          backgroundSize: "170px 169px",
        }}
      />

      <div className="absolute inset-0 px-12 h-full w-full flex items-center">
        {/* Text editor area */}
        <div className="relative bg-[#FCFCFC] rounded-2xl w-full p-6 shadow-lg">
          <div className="bg-white rounded-2xl p-4 font-mono text-[#333333] min-h-[100px] relative border-2 border-[#FFE156]">
            <div className="flex items-center gap-2 mb-2 opacity-50">
              <div className="w-3 h-3 rounded-full bg-[#FF5C8D]" />
              <div className="w-3 h-3 rounded-full bg-[#FFE156]" />
              <div className="w-3 h-3 rounded-full bg-[#7DEDFF]" />
            </div>
            <p>
              {text}
              <span className="inline-block w-2 h-4 bg-[#FF5C8D]" />
            </p>
          </div>
        </div>

        <Character isLeftHandUp={isLeftHandUp} isRightHandUp={isRightHandUp} />
      </div>
    </div>
  );
}
