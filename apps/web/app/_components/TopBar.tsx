import PixelButton from "@/components/pixel-button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#FF5C8D] rounded-full flex items-center justify-center">
          <span className="font-pixel text-white text-xl">B</span>
        </div>
        <h1 className="font-pixel text-xl md:text-2xl">Bongo Typing</h1>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#features"
          className="font-pixel hover:text-[#FF5C8D] transition-colors"
        >
          Features
        </Link>
        <Link
          href="#characters"
          className="font-pixel hover:text-[#FF5C8D] transition-colors"
        >
          Characters
        </Link>
        <Link
          href="#download"
          className="font-pixel hover:text-[#FF5C8D] transition-colors"
        >
          Download
        </Link>
      </nav>
      <PixelButton href="#download" className="bg-[#FF5C8D] text-white">
        <DownloadIcon className="w-4 h-4 mr-2" />
        Download
      </PixelButton>
    </header>
  );
};

export default TopBar;
