"use client";

import Character from "@/components/Character";
import { useTypingTextEffect } from "@/hook/useTypingTextEffect";
import { gsap, useGSAP } from "@/lib/gsap";
import { useCharacterStore } from "@/store/character";
import React from "react";
import TypingWindow from "./TypingWindow";

export const phrases = [
  "Type with your bongo friend.",
  "Pals loves to type with you!",
  "Watch the paws go tap tap tap...",
];

const DemoSection = () => {
  const bg = useCharacterStore.use.bg();
  const leftUp = useCharacterStore.use.leftUpHand();
  const leftDown = useCharacterStore.use.leftDownHand();
  const rightUp = useCharacterStore.use.rightUpHand();
  const rightDown = useCharacterStore.use.rightDownHand();

  const { text } = useTypingTextEffect(phrases);
  const isRightHandUp = text.length % 2 === 0;
  const isLeftHandUp = text.length % 2 === 1;

  useGSAP(() => {
    gsap.to(".main-typing-character", {
      bottom: -4,
      left: 0,
      rotateY: 180,
      zIndex: 1000,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".content",
        start: "5% 80%",
        end: "15% 80%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-center">
        <div className="w-[85%] sm:w-[80%] md:w-[60%] xl:w-[40%] fixed bottom-[40%] sm:bottom-[36%] z-20">
          <TypingWindow text={text} />
        </div>
      </div>
      <div className="main-typing-character aspect-video w-[85%] sm:w-[80%] md:w-[60%] xl:w-[40%] fixed bottom-[40%] sm:bottom-[36%] z-1000 rounded-3xl overflow-hidden">
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
    </>
  );
};

export default DemoSection;
