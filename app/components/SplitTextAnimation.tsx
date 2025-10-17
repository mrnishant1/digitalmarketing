import { useRef } from "react";
import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useState } from "react";
type LookingProps = {
  text: string;
  eye: Boolean|false,
  textsize: number
};

export default function TextAnimation({ text, eye, textsize}: LookingProps) {
  const looking = useRef<HTMLDivElement>(null);
  const text1 = text.split("");
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
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

   
  }, []);

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
    const handleMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

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

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () => (
      window.removeEventListener("mousemove", handleMove),
      window.removeEventListener("scroll", handleScroll)
    );
  }, []);


  return (
    <>
      <div className={`w-[100%] h-[100%]  top-0`}>
        <div className="first_page  overflow-hidden top-0  flex flex-col justify-evenly h-[100%] w-[100%]">
          {/* Looking------------------------------------ */}
          <h1
            ref={looking}
            style={{
              transition: "transform 0.4s ease",
              transformOrigin: "38% 50%",
            }}
            className={`h1looking text-[${textsize}px] h-0 font-bold items-center flex `}
          >
            {text1.map((char, i) => (
              <span
                key={i}
                className={`inline-block opacity-0 relative `}
                style={
                  char === "o"&&eye
                    ? {
                        borderRadius: "100%",
                        height: "20rem",
                        backgroundColor: "#000",
                        color: "#7F9C96",
                        textShadow: "none",
                      }
                    : {}
                }
              >
                <div
                  style={
                    char === "o"&&eye
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
        </div>
      </div>
    </>
  );
}
