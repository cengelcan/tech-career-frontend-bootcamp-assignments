import React from "react";

const ProjectsSection = () => {
  return (
    <div className="py-5">
      <h3 className="py-4 border-b font-normal my-[10px] text-[24px]">
        Projects
      </h3>
      <div className="px-[8px] mt-6 grid lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Summer House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house5.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>

        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Brick House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house2.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Renovated
            </div>
            <img
              src="https://www.w3schools.com/w3images/house3.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Barn House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house4.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
      </div>

      <div className="px-[8px] mt-6 grid lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Summer House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house2.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>

        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Brick House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house5.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Renovated
            </div>
            <img
              src="https://www.w3schools.com/w3images/house4.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
        <div className="mb-[16px]">
          <div className="relative">
            <div className="text-[#fff] bg-black py-2 px-4 absolute left-0 top-0">
              Barn House
            </div>
            <img
              src="https://www.w3schools.com/w3images/house3.jpg"
              className="w-full object-cover"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
