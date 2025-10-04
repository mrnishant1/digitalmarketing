import React, { useState, useEffect } from "react";
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";
import TextAnimation from "./SplitTextAnimation";

export default function NexaHomepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-sm bg-slate-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex flex-row w-full space-x-8 text-sm justify-evenly">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              About Us
            </a>
          </div>

          <button className="px-6 py-2 bg-transparent border border-emerald-400 rounded-full hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </nav>

      <div className="flex flex-row w-full h-full">
        <div className="text-2xl m-[10px] w-[15%] font-bold tracking-wider  flex flex-col justify-between ">
          <span className="h-[100%] transform -rotate-90 inline-block origin-right text-black text-9xl">
            NEXA
            <span className="text-xl block text-emerald-400 ml-1">
              WEB AGENCY
            </span>
          </span>

          {/* Social Links */}
          <div className="relative p-6 flex justify-center  left-0 w-[100%] h-[100%] flex-col space-y-4">
            <div className="bg-[#182338] rounded-2xl">
              <div className="text-xl text-gray-400 transform origin-left whitespace-nowrap">
                FOLLOW US
              </div>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
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
        </div>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center px-8">
          {/* Animated Background Element */}
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  WE
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    BUILD
                  </span>
                  <div className="w-full h-[100px]">
                    <TextAnimation text="BRANDS" eye={false} textsize={100} />
                  </div>
                </h1>

                <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                  From web design and e-commerce to digital marketing, we craft
                  tailored solutions to make your business stand out in the
                  digital landscape.
                </p>
              </div>

              {/* CTA Button */}
              <button className="group flex items-center space-x-4 bg-emerald-400 text-slate-900 px-8 py-4 rounded-full hover:bg-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50">
                <span className="font-semibold">
                  Let's Transform Your Digital Presence
                </span>
                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
              </button>

              {/* Stats Badge */}
              <div className="inline-flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">24</span>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Years of</div>
                  <div className="text-gray-400">Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl">
                {/* Placeholder for 3D design image - using gradient and shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse" />
                    <div
                      className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-40 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-xl" />
                    </div>
                  </div>
                </div>

                {/* Team avatars */}
                <div className="absolute bottom-8 right-8 flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-slate-900" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-slate-900" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-slate-900" />
                </div>

                {/* Floating label */}
                <div className="absolute top-8 left-8 bg-emerald-400/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-xs font-semibold">
                  Web Design
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-8 bg-slate-800/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-slate-700 shadow-xl">
                <div className="text-2xl font-bold text-emerald-400">350+</div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
