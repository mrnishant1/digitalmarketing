"use client";
import { useState, useEffect } from "react";
import HomePage from "./components/heropage";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";
import Loading from "./profile/loading";
import Why from "./components/why";
// import Image from "next/image";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 2 seconds
    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className="horizontal_section flex flex-col w-[100svw] bg-[#FEF8EC] relative top-0 left-0">
      <div
        className="w-[100svw] h-[100svh] fixed bg-[#47443e] flex justify-center items-center z-[1000] transition-opacity duration-1000"
        style={{
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none", // prevents clicks when hidden
        }}
      >
        <Loading text="LeadZup" />
      </div>

      <div className="overflow-hidden">
        <div className="w-[100svw] h-[150svh] lg:h-[100svh]">
          <HomePage />
        </div>
        <div className="w-[100svw] h-[100svh]">
          <Why/>
        </div>
        
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative overflow-hidden">
          <Page3 />
        </div>
      </div>

      <div className="relative flex w-[100vw] h-[300vh]">
        <Page4 />
      </div>

      <div
        id="howitworks"
        className="h-[40vh] w-[100vw] text-3xl md:text-4xl lg:text-6xl font-bold text-[#2a3e40] flex flex-col justify-center items-center"
      >
        <h1>How LeadZup</h1>
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-[#003566]">Sell Emotions</h1>
        <h1>instead of Products</h1>
      </div>

      <div className="w-[100vw] h-[90vh] overflow-hidden">
        <Page5 />
      </div>
      <div className="w-[100%] h-[100%]">
        <Page6 />
      </div>
    </div>
  );
}
