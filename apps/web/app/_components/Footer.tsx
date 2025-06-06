import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FCFCFC] w-full z-50 py-8 border-t-2 border-[#FFE156]/30 mb-[88vh]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/logo.webp"
              alt="bongo-typing"
              width={30}
              height={30}
              className="rounded-full shadow-md bg-neutral-800/60 p-0.5 pt-1"
            />
            <span className="font-pixel">Bongo Typing</span>
          </div>

          {/* <div className="flex gap-6"> */}
          {/* <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Privacy
            </Link> */}
          {/* <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Terms
            </Link> */}
          {/* <Link
              href="#"
              className="text-sm hover:text-[#FF5C8D] transition-colors"
            >
              Contact
            </Link> */}
          {/* </div> */}

          <div className="mt-4 md:mt-0 text-sm opacity-70">
            © {new Date().getFullYear()} Bongo Typing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
