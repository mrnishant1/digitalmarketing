import { useRef } from "react";
interface TextHalfAnimationProps{
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

export default function TextHalfAnimation({page2text, dims}:TextHalfAnimationProps) {
    const yourBrand = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="sticky top-0 w-[100svw] h-[100svh] flex flex-col justify-center bg-black">
        {page2text.map((items, i) => {
          const progress = dims.scrollPercentageY * 0.5 - 6 * (-i + 2);
          return (
            <div
              key={i}
              ref={yourBrand}
              className={`splittext w-full h-[1em] absolute top-[40%] flex items-center justify-center `}
            >
              <span
                className="texttop opacity-0 duration-300 bg-black"
                style={
                  progress > 34
                    ? {
                        transform: `translateY(${Math.max(
                          (progress - 34) * 0.8 > 2
                            ? -(progress - 34) * 0.04 * i
                            : 0,
                          -0.5 * i
                        )}em)`,
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
                className="textbottom opacity-0 duration-300 bg-black"
                style={
                  progress > 34
                    ? {
                        transform: `translateY(${Math.min(
                          (progress - 34) * 0.8 > 2
                            ? (progress - 34) * 0.04 * i
                            : 0,
                          0.51 * i
                        )}em)`,
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
