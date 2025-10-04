"use client";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import TextHalfAnimation from "./SplitHalfAnimation";
import HomePage from "./heropage";

export default function App() {
  const page2text = ["Your Brand", "Your Growth", "Our Way", "Let's Chat"];
  const [dims, setDims] = useState<{
    w: number;
    h: number;
    scroll_X: number;
    scroll_Y: number;
    scrollPercentageX: number;
    scrollPercentageY: number;
  }>({
    w: 1,
    h: 1,
    scroll_X: 0,
    scroll_Y: 0,
    scrollPercentageX: 0,
    scrollPercentageY: 0,
  });
  // const mask = useRef()
  const car = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    if (typeof window !== "undefined") {
      setDims({
        w: window.innerWidth,
        h: window.innerHeight,
        scroll_X: window.scrollY,
        scroll_Y: window.scrollY,
        scrollPercentageX:
          window.scrollX /
          (document.documentElement.scrollHeight - window.innerHeight),
        scrollPercentageY:
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
      });
    }
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setDims((prev) => ({
            ...prev,
            scroll_X: window.scrollX,
            scroll_Y: window.scrollY,
            scrollPercentageX:
              (window.scrollX /
                (document.documentElement.scrollHeight - window.innerHeight)) *
              100,
            scrollPercentageY:
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
              100,
          }));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => (
      window.removeEventListener("scroll", handleScroll)
    );
  }, []);

  useEffect(() => {
    if (!car.current) return;
    // car.current.style.setProperty("transform","translate(1000px, 00px)")
    const img = car.current.querySelector("img");
    if (img) {
      img.style.transform = "translate(1000px, 0px)";
    }
  }, []);

  return (
    <div className="horizontal_section flex flex-col w-[100svw] h-[300svh] bg-[#4D7C8A]   relative top-0 left-0">
      {/* Page 1 */}
      <div className="relative w-[100svw] h-[100svh] overflow-hidden">
        <HomePage/>
      </div>

    

      {/* Page 2---------------- */}
      <TextHalfAnimation page2text={page2text} dims={dims} />

      {/* Page 3 */}
      <div className="h-[100svh]"></div>
    </div>
  );
}
