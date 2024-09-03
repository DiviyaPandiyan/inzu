"use client"
import NextLink from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { HiMenu, HiX } from "react-icons/hi"; // Import menu icons for mobile

type Props = {};

export default function NavBar({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="w-full bg-white flex justify-between items-center drop-shadow-md p-4">
      {/* Links Section */}
      <div
         className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:space-x-6 text-center md:text-left absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
      >
        <NextLink
          href="/personal"
          className="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
        >
          My Personal Protection
        </NextLink>
        <NextLink
          href="/corporate"
          className="block py-2 md:py-0 hover:text-blue-500 transition-colors duration-300"
        >
          My Corporate Cover
        </NextLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="transition-transform duration-300 ease-in-out"
        >
          {menuOpen ? (
            <HiX className="text-3xl transform rotate-180" />
          ) : (
            <HiMenu className="text-3xl transform rotate-0" />
          )}
        </button>
      </div>

      {/* Icons and Currency Section */}
      <div className="flex items-center gap-4">
        <FaHeart className="text-xl md:text-2xl hover:text-red-500 transition-colors duration-300" />
        <span className="hidden md:block">AFR</span>
        <span className="hidden md:block">|</span>
        <RxAvatar className="text-3xl md:text-4xl hover:scale-110 transition-transform duration-300" />
        <span className="hidden md:block">USD</span>
      </div>
    </nav>
  );
}
