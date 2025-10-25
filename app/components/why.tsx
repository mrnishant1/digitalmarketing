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
      <div className="w-full h-full flex flex-col justify-start space-y-[4%] p-4">
        <h1 className="text-red-400 text-xs md:text-xl">About LeadZup</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-[#003566]">
          What problem do we solve?
          <br />
          <span>Why you need LeadZup & its targeted marketing services</span>
        </h1>

        <div className="pl-[10%] space-y-[3%]">
          <p className="text-gray-700 text-base md:text-lg">
            LeadZup focuses on personalized Reddit marketing that connects your
            brand directly with users who are already searching for what you
            offer.
          </p>

          <ul className="list-disc space-y-2 text-xl md:text-2xl lg:text-3xl text-gray-500">
            <li>We don’t spam users with generic ads.</li>
            <li>We act as your conversational marketing bot.</li>
            <li>
              We reach users who are actively looking for your products or
              services.
            </li>
            <li>We guide them toward discovering your brand naturally.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Why;
