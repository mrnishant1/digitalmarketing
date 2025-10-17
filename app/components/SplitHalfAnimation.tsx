import { useRef, useState, useEffect } from "react";

interface TextHalfAnimationProps {
  w: number;
  h: number;
  scroll_X: number;
  scroll_Y: number;
  scrollPercentageX: number;
  scrollPercentageY: number;
}

interface Props {
  words: string[];
  textsize: number;
  triggerpoint: number;
  stepsize: number;
}

export default function TextHalfAnimation({
  words = [],
  textsize,
  triggerpoint,
  stepsize,
}: Props) {
  const [dims, setDims] = useState<TextHalfAnimationProps>({
    w: 1,
    h: 1,
    scroll_X: 0,
    scroll_Y: 0,
    scrollPercentageX: 0,
    scrollPercentageY: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ticking = false;
    if (typeof window !== "undefined") {

      setDims({
        w: window.innerWidth,
        h: window.innerHeight,
        scroll_X: window.scrollY,
        scroll_Y: window.scrollY,
        scrollPercentageX:
          (window.scrollX * 100) /
          (document.documentElement.scrollWidth - window.innerWidth),

        scrollPercentageY:
          (window.scrollY * 100) /
          (document.documentElement.scrollHeight - window.innerHeight),
      });
    }
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const totalWidth =
            document.documentElement.scrollWidth - window.innerWidth;
          const scrollProgress = (window.scrollY / totalHeight) * 100;
          // each word occupies a certain scroll range, e.g. stepsize%

          
          setDims((prev) => ({
            ...prev,
            scroll_X: window.scrollX,
            scroll_Y: window.scrollY,
            scrollPercentageX: (window.scrollX / totalWidth) * 100,
            scrollPercentageY: scrollProgress,
          }));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div ref={containerRef} className="sticky top-0 w-[100svw] h-[100svh] flex flex-col justify-center bg-[#] overflow-x-clip">
        {words.map((items, i) => {
          const progress = dims.scrollPercentageY - triggerpoint;
          const currentIndex = Math.floor((progress - (stepsize * (i)))/stepsize);
          return (
            <div
              key={i}
              className={`splittext w-full h-[1em] absolute top-[40%] flex items-end justify-center `}
              style={{
                fontSize: `${textsize}px`,
              }}
            >
              <span
                className={`texttop opacity-0 duration-300 bg-[#] w-full flex justify-center `}
                style={
                  progress - (stepsize * ( i)) >= 0
                    ? {
                        transform: `translateY(-${Math.min(currentIndex*stepsize*4, (words.length-1-i)*stepsize*4)}px) `,
                        WebkitTextStroke: "2px #ffffff",
                        color: i!==words.length-1? "transparent":"white", // so only stroke shows for others
                        opacity: 1,
                        scale: 1.4,
                      }
                    : {
                        opacity: 0,
                        color: "transparent",
                      }
                }
              >
                {items}
              </span>
              <span
                className="textbottom opacity-0 duration-300 bg-[#] w-full flex justify-center"
                style={
                  progress - (stepsize *  (i)) >= 0
                    ? {
                        transform: `translateY(${Math.min(currentIndex*stepsize*4, (words.length-1-i)*stepsize*4)}px)`,
                        WebkitTextStroke: "2px #ffffff",
                        color: i!==words.length-1? "transparent":"white", // so only stroke shows for others
                        opacity: 1,
                        scale: 1.4,
                      }
                    : {
                        opacity: 0,
                        color: "transparent",
                      }
                }
              >
                {items}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
