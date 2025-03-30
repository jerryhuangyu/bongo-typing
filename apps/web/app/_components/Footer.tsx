import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FCFCFC] py-8 border-t-2 border-[#FFE156]/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-[#FF5C8D] rounded-full flex items-center justify-center">
              <span className="font-pixel text-white text-sm">B</span>
            </div>
            <span className="font-pixel">Bongo Typing</span>
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 md:mt-0 text-sm opacity-70">
            © {new Date().getFullYear()} Bongo Typing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
