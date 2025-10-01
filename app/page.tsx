"use client";
import "./page.css";
import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const looking = useRef<HTMLDivElement>(null);
  const text = "Looking";
  const text1 = text.split("");
  const text2 = "For";
  const text3 = "Marketing that Actually Works?";
  const yourBrand = useRef<HTMLDivElement>(null);
  const progress = 100;

  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dims, setDims] = useState<{
    w: number;
    h: number;
    scroll_X: number;
    scroll_Y: number;
    scrollPercentageX:number;
    scrollPercentageY:number;
  }>({ w: 1, h: 1, scroll_X: 0, scroll_Y: 0, scrollPercentageX:0, scrollPercentageY:0});
  

  const page2text = ["Your Brand", "Your Growth", "Our Way"];

  useEffect(() => {
    let ticking = false;
    if (typeof window !== "undefined") {
      setDims({
        w: window.innerWidth,
        h: window.innerHeight,
        scroll_X: window.scrollY,
        scroll_Y: window.scrollY,
        scrollPercentageX:   window.scrollX / (document.documentElement.scrollHeight - window.innerHeight),
        scrollPercentageY:   window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      });
    }
    const handleMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          looking.current?.style.setProperty(
            "transform",
            `scale(${1 + window.scrollY * 0.3}) translate(${
              pos.x - dims.w * 0.5
            }px, ${pos.y - dims.h * 0.5}px)`
          );

          // yourBrand.current?.querySelectorAll("texttop").style.setProperty("transform",  `translate(${window.scrollY*0.001})`)
          setDims((prev) => ({
            ...prev,
            scroll_X: window.scrollX,
            scroll_Y: window.scrollY,
            scrollPercentageX:   window.scrollX / (document.documentElement.scrollHeight - window.innerHeight)*100,
            scrollPercentageY:   window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)*100

          }));

          // looking.current?.style.setProperty("transition-origin", "0% 0%");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () =>( window.removeEventListener("mousemove", handleMove), window.removeEventListener("scroll", handleScroll))
  }, []);
  console.log(dims);
  useLayoutEffect(() => {
    if (!looking.current) return;
    const lookingChar = gsap.utils.toArray(
      looking.current!.querySelectorAll("span")
    );
    const tl = gsap.timeline();
    tl.fromTo(
      lookingChar,
      { x: -200, opacity: 0 }, // from
      {
        x: dims.w * 0.8, // to
        opacity: 1, // fade in
        ease: "power4.out",
        duration: 1,
        stagger: {
          each: 0.2,
          from: "end", // last char first
        },
      }
    );
    tl.fromTo(
      ".h1child",
      { x: 1000, opacity: 0 }, // from
      {
        // to
        x: dims.w + 250,
        opacity: 1, // fade in
        ease: "power3.out",
        duration: 1,
      },
      "-=0.3"
    );
    tl.fromTo(
      ".h1child2",
      { x: -200, opacity: 0 }, // from
      {
        x: dims.w * -0.25, // to
        opacity: 1, // fade in
        ease: "power3.out",
        duration: 1,
      },
      "-=0"
    );
    // wave animation -------------------
    // const spans = gsap.utils.toArray(wave.current!.querySelectorAll("span"));
    // const middle = 0;
    // gsap.fromTo(
    //   spans,
    //   {
    //     x: (i) => -10 * (i + 1),
    //     opacity: 1,
    //   },
    //   {
    //     x: (i) => 10 * (i + 1),
    //     modifiers: {
    //       y: (y, target) => {
    //         let x = gsap.getProperty(target, "x");
    //         if (typeof x === "string") x = parseFloat(x);
    //         return 50 * Math.sin(x / 30); // y depends on x
    //       },
    //     },
    //     opacity: 1,
    //     stagger: { each: 0.01, from: "end" },
    //     duration: 3,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "power1.inOut",
    //   }
    // );
  }, []);



  return (
    <div className="horizontal_section flex flex-col w-[100svw] h-[300svh] bg-yellow-300 overflow-x-hidden relative top-0 left-0">
      <div className="first_page overflow-hidden bg-yellow-300  top-0  flex flex-col justify-evenly h-[100svh] w-[100%]">
        <h1 className="h1child text-[8rem] text-transparent [-webkit-text-stroke:1px_black] self-center opacity-0">
          {text2}
        </h1>
        {/* Looking------------------------------------ */}
        <h1
          ref={looking}
          style={{
            transition: "transform 0.4s ease",
            transformOrigin: "38% 50%",
          }}
          className={`h1looking text-[20rem] h-0 text-black font-bold justify-center items-center flex `}
        >
          {text1.map((char, i) => (
            <span
              key={i}
              className={`inline-block opacity-0 relative ${
                char !== "o"
                  ? "drop-shadow-[3px_3px_5px] drop-shadow-black"
                  : ""
              }`}
              style={
                char === "o"
                  ? {
                      borderRadius: "100%",
                      height: "20rem",
                      backgroundColor: "#000",
                      color: "#FFDF20",
                      textShadow: "none",
                    }
                  : {}
              }
            >
              <div
                style={
                  char === "o"
                    ? {
                        transform: `
                          translate(${(pos.x / dims.w - 0.5) * 20}px, ${
                          (pos.y / dims.h - 0.5) * 10
                        }px) 
                        `,
                      }
                    : {}
                }
              >
                {char}
              </div>
            </span>
          ))}
        </h1>
        {/* Marketing---------------------------------- */}
        <h1 className="h1child2 text-[4rem]  z-0 left-[20%]   text-transparent [-webkit-text-stroke:1px_black] justify-center self-center opacity-0">
          {text3}
        </h1>
      </div>

      {/* Page 2---------------- */}
      <div className=" w-[100svw] h-[100svh] flex flex-col justify-center bg-amber-500 sticky top-0">
        {page2text.map((items, i) => (
          <div key={i} ref={yourBrand} className="splittext w-full h-[1em] absolute top-[25%] flex items-center justify-center  ">
            <span className="texttop opacity-0 duration-200"     style={(dims.scrollPercentageY - (6 *((-i*1.2)+4))) >33.5?{ transform: `translateY(${-((dims.scrollPercentageY - (6 *( (-i*1.2)+4)))-(33.5)  )*3* (i)}px)`, opacity:1, transition:`ease-in-out`, filter: `drop-shadow(offset-x offset-y blur-radius color)`}:{}}>
              {items}
            </span>
            <span className="textbottom opacity-0 duration-200"  style={(dims.scrollPercentageY - (6 * ((-i*1.2)+4)))>33.5?{ transform: `translateY(${((dims.scrollPercentageY - (6 *( (-i*1.2)+4)))-(33.5)  )*3* (i)}px)` , opacity:1, transition:`ease-in-out`, filter: `drop-shadow(offset-x offset-y blur-radius color)`}:{}}>
              {items}
            </span>
          </div>
        ))}
      </div>

      {/* Page 3 */}
      <div className="h-[100svh]">

      </div>
    </div>
  );
}
