import React, { useState, useEffect } from "react";
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";
import TextAnimation from "./SplitTextAnimation";
import Image from "next/image";

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const word = ["Get", "Attention", "Your", "Brand", "Diserve"];

  return (
    <div className="min-h-screen w-[100svw] h-[100svh] bg-[#8E6E53] text-white sticky">
      <div className="relative flex flex-row w-full h-full">
        {/* Left Brand section */}
        <div className="text-2xl m-[10px] w-[15%] h-[100%] font-bold flex flex-col justify-start  ">
          {/* Brand Name */}
          <div className="flex flex-col text-[#C0B7B1]">
            <span className=" text-9xl">N</span>
            <span className=" text-9xl">E</span>
            <span className=" text-9xl">X</span>
            <span className=" text-9xl">U</span>
            <span className=" text-9xl">S</span>
            <span className="text-xl block text-[#433E3F] ml-1">
              WEB AGENCY
            </span>
          </div>

          {/* Social Links */}
          <div className="bg-[#8E6E53] text-[#433E3F] z-50 absolute left-[1%] bottom-[1%] rounded-2xl w-[20%] h-[25%] flex flex-col p-[10px] justify-center">
            <div className="text-xl   whitespace-nowrap">FOLLOW US</div>
            <p className=" max-w-md text-sm leading-relaxed">
              By reaching out to connect with us, you're taking first step
              toward unlocking the full potential of your digital existance.
            </p>
            <div className="space-y-4 pl-4">
              <a
                href="#"
                className="block hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="block hover:text-emerald-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="block hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Experiment section */}
        <div className="relative w-[100%] h-[100svh] flex flex-col justify-center items-center ">
          {/* Center Attraction */}
          <div className="w-[90%] h-[80%] flex flex-col justify-between  bg-[#433E3F] rounded-4xl p-[1%]">
            <div>
            {/* Navigation */}
              <nav className="relative top-0 w-full z-50 px-8 py-6 backdrop-blur-sm ">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="hidden md:flex flex-row w-full space-x-8 text-xl justify-evenly">
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      About Us
                    </a>
                  </div>

                  <button className="px-6 py-2 bg-transparent border border-emerald-400 rounded-full hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
            <div>
              {/* Below Nevigation */}
              <div className="w-[100%] h-[100%] relative flex flex-row justify-between  bg-[#433E3F] rounded-4xl p-[1%]">
                {/* Left */}
                <div className="space-y-8">
                  <div className="space-y-4 text-[#C0B7B1]">
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                      WE
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        BUILD
                      </span>
                      <div className="w-full h-[100px]">
                        <TextAnimation
                          text="BRANDS"
                          eye={false}
                          textsize={100}
                        />
                      </div>
                    </h1>

                    <p className=" max-w-md text-sm leading-relaxed">
                      From web design and e-commerce to digital marketing, we
                      craft tailored solutions to make your business stand out
                      in the digital landscape.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="group flex items-center space-x-4 bg-[#8E6E53] px-8 py-4  rounded-full transition-all duration-300 hover:shadow-lg ">
                    <span className="font-semibold">
                      Let's Transform Your Digital Presence
                    </span>
                    <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </div>
                  </button>
                </div>
                {/* Images */}
                <div className="w-[50%]  h-[95%] relative bottom-[-20%] right-[-5%] bg-[#8E6E53] flex flex-row justify-end items-end p-4 rounded-2xl">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`relative h-[100%] w-[35%] shadow-2xl rounded-2xl overflow-hidden transition-[width scale]  duration-500  hover:scale-110 hover:z-20 hover:w-[50%]`}
                      style={{ marginLeft: i === 0 ? 0 : -10 }} // negative margin for overlap
                    >
                      <Image
                        src={`/img_${i + 1}.jpeg`}
                        alt={`Image ${i + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* <span className="text-white text-7xl w-[100px] h-[100px] z-40 relative">hi</span> */}
                      <div className="flex flex-col items-center justify-center font-serif h-[100%] font-bold  text-[#fff] text-6xl w-[100px] z-40 relative"
                      style={{
                        WebkitTextStroke: `1px black`,
                      }}
                      >
                        {word[i].split("").map((items, i) => (
                          <span key={i}>{items}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
      </div>
    </div>
  );
}
