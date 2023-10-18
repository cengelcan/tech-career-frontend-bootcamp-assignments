import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-[#fff] text-center p-9 text-[15px]">
      <p>
        Powered by{" "}
        <Link href="/" className="underline">
          w3.css
        </Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
