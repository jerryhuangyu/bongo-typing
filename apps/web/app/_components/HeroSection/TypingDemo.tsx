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
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-[#FCFCFC] rounded-2xl p-6 shadow-lg">
        {/* Text editor area */}
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
  );
}
