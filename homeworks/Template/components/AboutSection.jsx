import React from "react";

const AboutSection = () => {
  return (
    <div className="py-5 px-2">
      <h3 className="py-4 border-b font-normal my-[10px] text-[24px]">About</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 filter grayscale-[75%] lg:gap-2 gap-5">
        <div className="flex flex-col gap-2 px-2">
          <img
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt="profile photo"
          />
          <h3 className="font-normal my-[10px] text-[24px]">John Doe</h3>
          <p className="opacity-60">CEO & Founder</p>
          <p className="">
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p className="text-center bg-gray-100 py-2 cursor-pointer hover:bg-gray-300">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <img
            src="https://www.w3schools.com/w3images/team1.jpg"
            alt="profile photo"
          />
          <h3 className="font-normal my-[10px] text-[24px]">John Doe</h3>
          <p className="opacity-60">CEO & Founder</p>
          <p className="">
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p className="text-center bg-gray-100 py-2 cursor-pointer hover:bg-gray-300">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <img
            src="https://www.w3schools.com/w3images/team3.jpg"
            alt="profile photo"
          />
          <h3 className="font-normal my-[10px] text-[24px]">John Doe</h3>
          <p className="opacity-60">CEO & Founder</p>
          <p className="">
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p className="text-center bg-gray-100 py-2 cursor-pointer hover:bg-gray-300">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <img
            src="https://www.w3schools.com/w3images/team4.jpg"
            alt="profile photo"
          />
          <h3 className="font-normal my-[10px] text-[24px]">John Doe</h3>
          <p className="opacity-60">CEO & Founder</p>
          <p className="">
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p className="text-center bg-gray-100 py-2 cursor-pointer hover:bg-gray-300">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
