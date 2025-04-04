"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownloadSection from "./_components/DownloadSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import TypingDemo from "./_components/HeroSection/TypingDemo";
import ShowcaseSection from "./_components/ShowcaseSection";
import TopBar from "./_components/TopBar";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useGSAP(() => {
    gsap.to(".content", {
      margin: "0px",
      width: "100%",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        end: "20% 80%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#333333] flex flex-col font-sans items-center">
      <div
        className="fixed w-full h-full opacity-20 z-10"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #FF5C8D 0px, #FF5C8D 10px, 
            transparent 10px, transparent 20px, #7DEDFF 20px, #7DEDFF 30px, 
            transparent 30px, transparent 40px, #FFE156 40px, #FFE156 50px, 
            transparent 50px, transparent 60px)`,
          backgroundSize: "170px 170px",
        }}
      />

      <div className="h-[80vh] w-full flex items-center justify-center" />
      <div className="w-[85%] sm:w-[80%] md:w-[60%] xl:w-[40%] fixed top-[30%] sm:top-[22%] z-20">
        <TypingDemo />
      </div>

      <main className="content z-30 flex-1 rounded-2xl bg-[#FCFCFC] w-[94%] shadow-2xl">
        <TopBar />
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
