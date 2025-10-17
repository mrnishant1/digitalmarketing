"use client";
import TextHalfAnimation from "./components/SplitHalfAnimation";
import HomePage from "./components/heropage";
import Image from "next/image";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";

export default function App() {
  const page2text = ["Let's Chat", "Our Way", "Your Growth", "Your Brand"];

  return (
    <div className="horizontal_section flex flex-col w-[100svw] bg-[#7ed6dfd9]   relative top-0 left-0 ">
      {/* Page 1 */}
      <div className="overflow-hidden">
        <div className="w-[100svw] h-[100svh]">
          <HomePage />
        </div>

        {/* Page 2---------------- */}
        {/* <div className="w-[100svw] h-[300svh] flex flex-col sticky">
        <TextHalfAnimation
          words={page2text}
          textsize={150}
          triggerpoint={10}
          stepsize={15}
          
        />
      </div> */}

        <div className="w-[100vw] h-[70vh]  flex justify-center items-center relative ">
          <Page3 />
        </div>
      </div>

      <div className="relative flex w-[100vw] h-[300vh]">
        <Page4 />
      </div>

      <div id="howitworks" className="h-[40vh] w-[100vw] text-6xl font-bold text-[#2a3e40] flex flex-col justify-center items-center">
        <h1 className="">How LeadZup</h1>
        <h1 className=" text-8xl text-[#fff]">Sell Emotions</h1>
        <h1 className=" ">instead of Products</h1>
      </div>


      <div className="w-[100vw] h-[60vh]" >
        <Page5/>
      </div>
      <div className="w-[100%] h-[100%]" >
        <Page6 />
      </div>
    </div>
  );
}
