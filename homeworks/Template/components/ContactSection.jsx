import React from "react";

const ContactSection = () => {
  return (
    <div className="py-5 px-2">
      <h3 className="py-4 border-b font-normal my-[10px] text-[24px]">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="border border-gray-300 p-[8px] block overflow-visible w-full"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 p-[8px] block overflow-visible w-full"
        />
        <input
          type="text"
          placeholder="Subject"
          required
          className="border border-gray-300 p-[8px] block overflow-visible w-full"
        />
        <input
          type="text"
          placeholder="Comment"
          required
          className="border border-gray-300 p-[8px] block overflow-visible w-full"
        />
        <button className="text-[#fff] bg-black py-2 px-4 w-40 uppercase inline-block overflow-hidden text-center cursor-pointer whitespace-nowrap hover:bg-gray-300 hover:text-black">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
