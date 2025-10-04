import { useRef, useState, useEffect } from "react";
interface TextHalfAnimationProps {
  page2text: string[];
  dims: {
    w: number;
    h: number;
    scroll_X: number;
    scroll_Y: number;
    scrollPercentageX: number;
    scrollPercentageY: number;
  };
}

export default function TextHalfAnimation({
  page2text,
  dims,
}: TextHalfAnimationProps) {
  const yourBrand = useRef<HTMLDivElement>(null);
  // const [current, setCurrent] = useState<number>(page2text.length);
  // const [progress, setProgress] = useState<number>()
  // useEffect(() => {
  //   if(!progress)return;
  //   if (progress > 34) {
  //     setCurrent((i) => (i + 1) % page2text.length);
  //   }
  // }, [progress]);

  return (
    <>
      <div className="sticky top-0 w-[100svw] h-[100svh] flex flex-col justify-center bg-[#8E6E53]">
        {page2text.map((items, i) => {
          const progress = dims.scrollPercentageY * 0.5 - 6 * (-i + 2);
          console.log(dims.scrollPercentageY)
          // setProgress(()=>(progress));
          return (
            <div
              key={i}
              ref={yourBrand}
              className={`splittext w-full h-[1em] absolute top-[40%] flex items-center justify-center `}
            >
              <span
                className="texttop opacity-0 duration-300 bg-[#8E6E53]"
                style={
                  progress > 34
                    ? {
                        transform: `translateY(${Math.max(
                          (progress - 35) * 0.8 > 2
                            ? -(progress - 35) * 0.04 * i
                            : 0,
                          -0.5 * i
                        )}em)`,
                        WebkitTextStroke:
                          i ===0  ? "0px black" : "2px black",
                        color: i ===0  ? "#C0B7B1" : "transparent", // so only stroke shows for others
                        opacity: -i + 4,
                        transition: `transform: cubic-bezier(0,.84,1,-0.31)`,
                        scale: 1.4,
                      }
                    : {}
                }
              >
                {items}
              </span>
              <span
                className="textbottom opacity-0 duration-300 bg-[#8E6E53]"
                style={
                  progress > 34
                    ? {
                        transform: `translateY(${Math.min(
                          (progress - 35) * 0.8 > 2
                            ? (progress - 35) * 0.04 * i
                            : 0,
                          0.51 * i
                        )}em)`,
                         WebkitTextStroke:
                          i ===0  ? "0px black" : "2px black",
                        color: i ===0  ? "#C0B7B1" : "transparent", // so only stroke shows for others
                        opacity: -i + 4,

                        transition: `transform: cubic-bezier(0,.84,1,-0.31)`,
                        scale: 1.4,
                      }
                    : {}
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
