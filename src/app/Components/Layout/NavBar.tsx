import NextLink from "next/link";
import React from "react";

import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <>
      <nav className="w-full bg-white flex justify-between items-center drop-shadow-md p-4">
        {/* Mobile and Tablet Menu */}
        <section className="text-black">
          <ul className="flex flex-col md:inline-flex md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <li>
              <NextLink href={"/"} className="pl-4">
                My Personal Protection
              </NextLink>
            </li>
            <li>
              <NextLink href={"/"} className="pl-4">
                My Corporate Cover
              </NextLink>
            </li>
          </ul>
        </section>

        {/* Icons and Currency Section */}
        <section className="flex items-center gap-4 justify-between pr-4">
          <FaHeart className="text-2xl" /> AFR
          <div>|</div>
          <RxAvatar className="bg-D9D9D9 text-4xl md:text-6xl" /> USD
        </section>
      </nav>
    </>
  );
}
