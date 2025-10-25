import React, { useEffect, useState } from "react";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import "./page.css";
import Conversation from "./3dbackground/conversation";
import Trialpage from "./trialpage";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../signin/firebaseconfig";
import Navbar from "./navbar";

export default function Homepage() {
  const [visibility, setvisibility] = useState(true);
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    // console.log(
    //   "useeffect ran in setiser heropage----------------------------"
    // );
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setuser(currentUser);
    });
    return () => unsubscribe(); // cleanup
  }, []); // run only once

  return (
    <div className="min-h-screen relative w-[100%] h-[100%] text-gray-200 flex flex-col p-3.5">
      {/* Book trial */} {/* Get started button */}
      <div className="w-[100vw] h-[100vh] absolute left-0 top-0 flex justify-center items-center">
        {visibility && user === null && (
          <Trialpage setvisibility={setvisibility} />
        )}
      </div>
      {/* Nav bar */}
      <Navbar user={user} />
      {/* Home page */}
      <div className="relative flex w-full h-full ">
        <div className="relative w-[100%] h-[100%] flex flex-col items-start p-x-[16] pt-2.5">
          <div
            className="relative w-[100%] h-[100%] lg:h-[90%] lg-[80%] lg:absolute  right-[-100px] z-20"
            style={{ pointerEvents: "none" }}
          >
            {/* Girl image section */}
            <Image
              src="/girloutpost.png"
              alt="Engaging to users who are in search of products and Posting personalised ads "
              fill
              className="z-[3] object-contain w-full h-full relative right-0"
              style={{
                filter: "drop-shadow(6px 2px 2px black)",
                objectPosition: "right", // sticks image to right
                pointerEvents: "none",
              }}
            />
            {/* reach */}

            <div
              className="float-x flex justify-center absolute left-[1%] bottom-[1%] items-center backdrop-blur-3xl text-xl rounded-[0px 10px 0px 10px]  z-indx-1 p-rlte zws-bnnr-img "
              style={{
                borderRadius: "5px 5px 5px 5px",
                boxShadow: "2px 2px 2px black",
              }}
            ></div>
          </div>
          {/* conversation */}
          <Conversation />

          {/* Center Attraction */}
          <div className="w-[100%] h-[90%] flex flex-col gap-3.5  bg-[#FDEAD5] border-2 border-white rounded-4xl p-[5%]">
            {/* Below LeadZup */}
            <div className="w-full h-full relative flex flex-col md:flex-row items-center justify-between rounded-4xl p-6 md:p-8">
              {/* Left */}
              <div className="flex flex-col gap-4 text-center md:text-left md:gap-5">
                <div className="text-[#003566] ">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-6xl font-bold leading-tight">
                    We Provide engagement
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-6xl font-bold leading-tight">
                    Ads that talk
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-6xl font-bold leading-tight">
                    to customers
                  </h1>
                  <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl text-gray-500 font-bold leading-tight">
                    Hire us as your personal talking Bill board...
                  </h1>

                  <p className="font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 mt-4 text-gray-500 leading-relaxed">
                    Your current Ads model is great but Not effective as
                    personalised Ads model.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
                  <a
                    href="#contactform"
                    className="text-lg sm:text-2xl font-sans font-bold bg-[#4F5E60] rounded-3xl px-6 py-3 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
                  >
                    Contact Us
                  </a>
                  <button
                    className="text-lg sm:text-2xl font-sans font-bold bg-[#4F5E60] rounded-3xl px-6 py-3 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
                    onClick={() => setvisibility(true)}
                    style={{ visibility: user === null ? "visible" : "hidden" }}
                  >
                    Book Free Trial
                  </button>
                </div>

                {/* Social */}
                <div className="flex justify-center md:justify-start space-x-6 items-center mt-6 z-[100]">
                  <a
                    href="https://www.linkedin.com/in/leadzup-a19605390/"
                    className="p-2 hover:bg-[#272626] text-gray-500 hover:text-white rounded-full transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/lead_zup/"
                    className="p-2 hover:bg-[#272626] text-gray-500 hover:text-white rounded-full transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
