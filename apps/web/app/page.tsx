"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import DemoSection from "./_components/DemoSection";
import DownloadSection from "./_components/DownloadSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import PatternBackground from "./_components/PatternBackground";
import ShowcaseSection from "./_components/ShowcaseSection";
import TopBar from "./_components/TopBar";

export default function HomePage() {
  useGSAP(() => {
    gsap.to(".content", {
      margin: "0px",
      width: "100%",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        end: "30% 80%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#333333] flex flex-col font-sans items-center">
      <PatternBackground />
      <DemoSection />
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
