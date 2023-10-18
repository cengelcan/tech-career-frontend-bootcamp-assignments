import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="top-0 fixed w-full z-10">
      <div className="bg-[#fff] py-2 px-5 shadow-md overflow-hidden w-full flex justify-between">
        <Link
          href="/"
          className="py-2 px-4 w-auto block whitespace-normal hover:bg-gray-300"
        >
          <span className="font-extrabold">B R </span>
          <span className="px-2 tracking-widest">Architects</span>
        </Link>
        <div className="hidden sm:inline-flex">
          <Link
            href="#projects"
            className="py-2 px-4 w-auto block whitespace-normal hover:bg-gray-300"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="py-2 px-4 w-auto block whitespace-normal hover:bg-gray-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="py-2 px-4 w-auto block whitespace-normal hover:bg-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
