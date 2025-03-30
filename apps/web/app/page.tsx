import DownloadSection from "./_components/DownloadSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import ShowcaseSection from "./_components/ShowcaseSection";
import TopBar from "./_components/TopBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#333333] flex flex-col">
      <TopBar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
