import PixelButton from "@/components/pixel-button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="bongo-typing"
          width={50}
          height={50}
          className="rounded-full shadow-md bg-neutral-800/60 p-0.5 pt-1"
        />
        <h1 className="font-candy text-neutral-600 text-xl md:text-2xl">
          Bongo Typing
        </h1>
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
