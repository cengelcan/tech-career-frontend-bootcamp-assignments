import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://www.w3schools.com/w3images/architect.jpg"
        className="w-full h-full object-cover"
        alt="hero image"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl font-medium text-white text-center">
          <span className="bg-black py-2 px-4 opacity-75">B R</span>
          <span className="mx-2 tracking-widest">Architects</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
