import PixelButton from "@/components/pixel-button";
import { DownloadIcon } from "lucide-react";
import React from "react";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="bg-gradient-to-r from-[#FF5C8D] to-[#FF8C42] text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pixel text-3xl md:text-4xl mb-4">
          Ready to Type with Bongo?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Download Bongo Typing now and transform your typing experience with an
          adorable companion
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* <PixelButton
            href="#"
            className="bg-white text-[#70C0E7] rounded-full"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download for Linux(Coming Soon)
          </PixelButton> */}
          <a href="/release/Bongo Typing-0.0.1.dmg" download>
            <PixelButton className="bg-white text-[#FF8C42] rounded-full">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download for Mac
            </PixelButton>
          </a>
          {/* <PixelButton
            href="#"
            className="bg-white text-[#FF5C8D] rounded-full"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download for Windows(Coming Soon)
          </PixelButton> */}
        </div>

        {/* <div className="mt-8 text-sm opacity-80">
          Version 1.0.2 • 15MB • Requires Windows 10/macOS 10.14/Ubuntu 18.04 or
          newer
        </div> */}
      </div>
    </section>
  );
};

export default DownloadSection;
