"use client";

import { useTypingTextEffect } from "@/hook/useTypingTextEffect";
import { useCharacterStore } from "@/store/character";
import Character from "./Character";

const phrases = [
  "Type with your bongo friend.",
  "Pals loves to type with you!",
  "Watch the paws go tap tap tap...",
];

export default function TypingDemo() {
  const bg = useCharacterStore.use.bg();
  const leftUp = useCharacterStore.use.leftUpHand();
  const leftDown = useCharacterStore.use.leftDownHand();
  const rightUp = useCharacterStore.use.rightUpHand();
  const rightDown = useCharacterStore.use.rightDownHand();

  const { text } = useTypingTextEffect(phrases);

  const isRightHandUp = text.length % 2 === 0;
  const isLeftHandUp = text.length % 2 === 1;

  return (
    <div className="aspect-video relative">
      {/* background */}
      <div
        className="absolute w-full h-full backdrop-blur-[5px]"
        style={{ backgroundSize: "170px 169px" }}
      />

      <div className="absolute inset-0 rounded-3xl shadow-2xl px-2 h-full w-full flex items-center xs:px-12 overflow-hidden">
        {/* Text editor window */}
        <div className="relative bg-[#FAFAFA] rounded-2xl w-full p-2 shadow-lg">
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

        <Character
          isLeftHandUp={isLeftHandUp}
          isRightHandUp={isRightHandUp}
          bgSrc={bg}
          leftUpSrc={leftUp}
          leftDownSrc={leftDown}
          rightUpSrc={rightUp}
          rightDownSrc={rightDown}
          className="h-20 sm:h-32 lg:h-24 xl:h-32"
        />
      </div>

      <div className="absolute -bottom-8 -right-6 bg-[#7DEDFF] p-2 rounded-full font-pixel text-sm rotate-3 sm:p-3">
        Your typing buddy!
      </div>
    </div>
  );
}
