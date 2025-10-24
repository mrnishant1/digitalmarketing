import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[100%] h-[100%]">
      {/* left */}
      <div className="w-full h-[80%] relative flex justify-center items-center">
        <Image
          alt="why you need digital marketing"
          src={"/Frame.png"}
          fill
          className="z-[3] object-contain w-full h-full relative right-0"
        />
      </div>
      {/* right */}
      <div className="w-full h-full justify-start space-y-[4%] flex flex-col p-4">
        <h1 className="text-red-400 text-xs md:text-xl">About LeadZup</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-[#003566]">What problem do we solve? <br /><span> Why You Need LeadZup & its targated Marketing Services</span></h1>
        <div className=" pl-[10%] space-y-[3%]">
            <li className=" text-xl md:text-2xl lg:text-3xl text-gray-500">We Don't spam Ads like conventional Ads.</li>
            <li className=" text-xl md:text-2xl lg:text-3xl text-gray-500">We are your talking bot.</li>
            <li className=" text-xl md:text-2xl lg:text-3xl text-gray-500">We targates user who are in search of Products you provides</li>
            <li className=" text-xl md:text-2xl lg:text-3xl text-gray-500">We then help them finding your products</li>
        </div>
      </div>
    </div>
  );
};

export default Why;
