import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { signinhandler } from "../signin/signInHandler";
import Image from "next/image";

const Trialpage = ({
  setvisibility,
}: {
  setvisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className="fixed z-[100] w-[80%] md:w-[70%] lg:w-[60%] h-[80vh] flex justify-center items-center bg-[#6cb7bf16] backdrop-blur-2xl  rounded-2xl"
        style={{
          // visibility: user === null ? "visible" : "hidden",
          transition: "visibility",
          transitionDuration: "0ms",
          boxShadow: "3px 3px 4px black",
        }}
      >
        {/* close */}
        <div
          className="text-5xl z-[1000] text-red-500 right-[-15px] top-[-15px] absolute bg-white hover:scale-[1.05] active:scale-[0.97] transition-all duration-150 rounded-[100%] "
          onClick={() => setvisibility(() => false)}
        >
          <IoMdCloseCircle />
        </div>

        {/* main section */}
        <div className="w-full h-full flex md:flex-row flex-col justify-center items-center overflow-hidden rounded-2xl">
          {/* left */}
          <div className="relative w-full h-full ">
            <Image src="/getstart.png" alt="getstart" fill className="object-cover" loading="eager" />
          </div>

          {/* Right */}
          <div className="w-full text-[#2A3E40] h-[80%] lg:h-full space-y-1 md:space-y-3 lg:space-y-5 flex flex-col p-4.5 bg-[#FEA13A]">
            {/* GEt started */}
            <>
              <h1 className="lg:text-7xl md:text-4xl text-2xl z-[10]">Lift off</h1>
              <h1 className="lg:text-7xl md:text-4xl text-2xl z-[10]">
                Your brand’s flight begins here.....
              </h1>
              <h1 className="lg:text5xl md:text-3xl text-2xl z-[10]">
                50 Free <span className="g:text5xl md:text-3xl text-2xl text-[#ebe5e5]">credit</span>
              </h1>
              <h1 className="text-xs md:text-2xl font-sans text-white z-[10]">
                Free Trial SignUp bonus, Try It Now.
              </h1>
              <button
                className="text-xs md:text-2xl font-sans bg-[#dee4e5] rounded-4xl p-2.5  hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
                onClick={() => {
                  signinhandler();
                }}
              >
                Get Started
              </button>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trialpage;
