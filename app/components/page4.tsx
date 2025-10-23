import { PostCard, ReplyCard } from "@/components/ui/uicomponents";
import { useEffect, useState } from "react";
import "./page.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
// import RightBoxPage2 from "./rightbox2";

export default function Page4() {
  const [scrollPercentageY, setscrollPercentageY] = useState<number>(0);
  const [resizedScreen, setresizedScreen] = useState<number>(0);

  useEffect(() => {
    setresizedScreen(window.innerWidth)
    function handleScroll() {
      window.requestAnimationFrame(() => {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setscrollPercentageY(() =>
          parseFloat(((window.scrollY / totalHeight) * 100).toFixed())
        );
      });
    }

    function handleResize() {
      setresizedScreen(() => window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (resizedScreen < 550) {
    return <>
    <div className="flex flex-col">
    <div className="h-[100vh] w-[100vw] relative  inset-0 bg-[#D6E8DC] z-30 flex items-center justify-center p-4.5 overflow-hidden">{RightBoxPage1(scrollPercentageY)}</div>
    <div className="h-[100vh] w-[100vw] relative flex flex-col text-white items-center justify-center p-8"><LeftBoxPage1 /></div>
    <div className="h-[120vh] w-[100vw] relative  inset-0 bg-[#D6E8DC] z-30 flex items-center justify-center p-4.5">{RightBoxPage2(scrollPercentageY)}</div>
    <div className="h-[80vh] w-[100vw] relative flex flex-col text-white items-center justify-center p-8"><LeftBoxPage2 /></div>
    <div className="h-[100vh] w-[100vw] relative  inset-0 bg-[#D6E8DC] z-30 flex items-center justify-center p-4.5">{RightBoxPage3(scrollPercentageY, resizedScreen)}</div>
    <div className="h-[60vh] w-[100vw] relative  flex flex-col text-white items-center justify-center p-8"><LeftBoxPage3 /></div>
    </div>
    </>;
  }

  return (
    <>
      {/* Left side - stays fixed */}
      <div className="sticky top-0 h-[100vh] w-[50%] z-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#D6E8DC] z-30 flex items-center justify-center p-4.5">
          {RightBoxPage1(scrollPercentageY)}
          {RightBoxPage2(scrollPercentageY)}
          {RightBoxPage3(scrollPercentageY, resizedScreen)}
        </div>
      </div>

      {/* Right side - scrolls normally */}
      <div className="w-[50%] h-[300vh] flex flex-col">
        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[400px] ">
            <LeftBoxPage1 />
          </div>
        </div>

        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[400px] ">
            <LeftBoxPage2 />
          </div>
        </div>
        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[400px] ">
            <LeftBoxPage3/>
          </div>
        </div>
      </div>
    </>
  );
}

function RightBoxPage1(scrollPercentageY: number) {
  return (
    <>
      <div
        className="flex flex-col relative top-0 h-[100%] w-full justify-end items-center"
        style={{
          opacity: scrollPercentageY < 26 || scrollPercentageY > 40 ? 0 : 1,
          transition: "all",
          transitionDuration: "400ms",
        }}
      >
        {/* Postcard Text="Help me to find the product, what would be the best to go with?"s section */}
        <div
          className="group h-[50%] w-[100%] absolute top-[5%] rounded-b-[100%]"
          style={{
            height: "75%",
            // borderBottom: "20px dashed #8bceea",
          }}
        >
          <div
            className="subgroup top-0 right-0 z-[5] absolute rounded-2xl"
            style={
              scrollPercentageY >= 26
                ? {
                    transition: "all",
                    rotate: "30deg",
                    scale: 1,
                    opacity: 1,
                    boxShadow: "-4px 4px 6px black",
                    transitionDuration: "400ms",
                  }
                : {
                    scale: 1.2,
                    boxShadow: "-4px 4px 6px black",
                    rotate: "0deg",
                    opacity: 0,
                  }
            }
          >
            <PostCard Text="Help me to find the product, what would be the best to go with?" />
          </div>
          <div
            className="subgroup top-0 left-0 z-[4] absolute rounded-2xl"
            style={
              scrollPercentageY >= 26
                ? {
                    transition: "all",
                    rotate: "-30deg",
                    scale: 1,
                    opacity: 1,
                    boxShadow: "-4px 4px 6px black",
                    transitionDuration: "400ms",
                    transitionDelay: "300ms",
                  }
                : {
                    scale: 1.2,
                    boxShadow: "-4px 4px 6px black",
                    rotate: "0deg",
                    opacity: 0,
                  }
            }
          >
            <PostCard Text="Help me to find the product, what would be the best to go with?" />
          </div>
          <div
            className="subgroup top-[10%] right-[25%] z-[5] absolute rounded-2xl"
            style={
              scrollPercentageY >= 26
                ? {
                    transition: "all",
                    rotate: "5deg",
                    scale: 1,
                    opacity: 1,
                    boxShadow: "-4px 4px 6px black",
                    transitionDuration: "400ms",
                    transitionDelay: "600ms",
                  }
                : {
                    scale: 1.2,
                    boxShadow: "-4px 4px 6px black",
                    rotate: "0deg",
                    opacity: 0,
                  }
            }
          >
            <PostCard Text="Help me to find the product, what would be the best to go with?" />
          </div>
        </div>
        {/* Line between them  */}
        <div
          className="w-full h-[10px] md:h-[15px] lg:h-[20px] bg-red-600"
          style={
            scrollPercentageY > 30 && scrollPercentageY < 40
              ? {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: "all",
                  transitionDuration: "600ms",
                  transitionDelay: "600ms",
                  // border: "4px dashed black",
                }
              : {
                  clipPath: "inset(0% 100% 0% 0%)",
                  transition: "all",
                  transitionDuration: "600ms",
                  transitionDelay: "600ms",
                }
          }
        ></div>
        <div
          className="thebrand text-4xl md:text-6xl lg:text-8xl text-black "
          style={{
            opacity: scrollPercentageY < 41 ? 0.3 : 1,
            scale: scrollPercentageY < 41 ? 1 : 1.5,
            transition: "all",
            transitionDuration: "1s",
            zIndex: 50,
          }}
        >
          Your Brand
        </div>
      </div>
    </>
  );
}

function RightBoxPage2(scrollPercentageY: number) {
  return (
    <div
      className="flex flex-col absolute top-0 h-[100%] w-full justify-center items-center "
      style={{
        opacity: scrollPercentageY < 41 || scrollPercentageY > 57 ? 0 : 1,
        transition: "all",
        transitionDuration: "400ms",
      }}
    >
      {/* MessageBody outline */}
      <div className=" w-[70%] lg:h-[90%] md:h-[70%] h-[60%] relative p-3.5 border-2 rounded-2xl overflow-hidden flex flex-col ">
        {/* Inside messages */}
        <div
          style={
            scrollPercentageY >= 40
              ? {
                  transform: `translateY(${
                    scrollPercentageY >= 41
                      ? `${-Math.max((scrollPercentageY - 44) * 10, 400)}px`
                      : "100px"
                  })`,
                  transition: "all",
                  transitionDuration: "1s",
                  transitionDelay: `${scrollPercentageY < 41 ? "0s" : "2s"}`,
                }
              : { opacity: 0 }
          }
        >
          {Messages(scrollPercentageY)}
        </div>

        <div className="w-[95%] h-[30px] flex justify-center items-center text-[#2f2e2e] absolute bottom-[10px] bg-[#ffffff5c] rounded-2xl border-2 border-[#ffffffc5]">
          Typing....
        </div>
      </div>
    </div>
  );
}

function RightBoxPage3(scrollPercentageY: number,resizedscreen:number) {
  return (
    <div
      className="flex flex-row gap-0 absolute top-0 h-[100%] w-full justify-center items-center "
      style={{
        opacity: scrollPercentageY < 58 ? 0 : 1,
        transition: "all",
        transitionDuration: "400ms",
      }}
    >
      <div className="h-[80%] w-[40%] text-3xl md:text-5xl lg:text-7xl text-center bg-amber-300 flex justify-center rounded-tl-2xl rounded-bl-2xl">
        Reddit Ads
      </div>
      <Image
        className="absolute z-0 "
        alt="Users"
        src={"/stickman.svg"}
        width={"70"} 
        height={"100"}
        style={{
          transform: `${resizedscreen<550?"scaleX(-2.5) scaleY(2.5)":"scaleX(-4) scaleY(4)"}`,
        }}
      />
      <div className="h-[80%] w-[10px] bg-black relative"></div>
      <div className="h-[80%] w-[40%] text-xl md:text-4xl lg:text-6xl bg-red-400 flex gap-[20%] justify-end pr-8 rounded-tr-2xl rounded-br-2xl">
        <div className="flex-col z-[10]">
          {"GenuineTalk".split("").map((items, i) => (
            <div key={i}>{items}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Messages(scrollPercentageY: number) {
  return (
    <div className="flex flex-col gap-2.5">
      <div
        style={{
          transform: `translateY(${scrollPercentageY >= 41 ? 0 : 1000}px)`,
          transition: "all",
          transitionDuration: "600ms",
          opacity: scrollPercentageY >= 41 ? 1 : 0,
        }}
      >
        <PostCard Text="Help me to find the product, what would be the best to go with?" />
      </div>
      <div
        className="w-full flex justify-end "
        style={{
          transform: `translateY(${scrollPercentageY >= 41 ? 0 : 1000}px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= 41 ? 1 : 0}s`,
          opacity: scrollPercentageY >= 41 ? 1 : 0,
        }}
      >
        <ReplyCard
          reply="I think you would like this one, try this brand"
        />
      </div>
      <div
        style={{
          transform: `translateY(${scrollPercentageY >= 41 ? 0 : 1000}px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= 41 ? 2 : 0}s`,
          opacity: scrollPercentageY >= 41 ? 1 : 0,
        }}
      >
        <PostCard Text="That was great, thanks for the suggestion you gave me." />
      </div>
      <div
        className="w-full flex justify-end "
        style={{
          transform: `translateY(${scrollPercentageY >= 41 ? 0 : 1000}px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= 41 ? 3 : 0}s`,
          opacity: scrollPercentageY >= 41 ? 1 : 0,
        }}
      >
        <ReplyCard reply="your most welcome!" />
      </div>
    </div>
  );
}

function LeftBoxPage1() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-7xl">
        Can't reach to right Users.
      </h1>
      <p className="text-xs md:text-xl lg:text-2xl font-sans leading-relaxed text-[#2a3e40]">
        Right now, thousands of potential customers are actively searching for
        solutions you offer. While your competitors are capturing these
        opportunities.{" "}
        <b className="text-2xl md:text-3xl lg:text-4xl">
          Stop missing conversations that matter. Be part of them—with precision
          targeting and authentic engagement
        </b>{" "}
        Partner with us to connect your brand to the right
        audience—authentically and at scale.
      </p>

      <div className="text-3xl md:text-4xl lg:text-6xl self-end">
        Break the barrier.
      </div>
    </>
  );
}

function LeftBoxPage2() {
  return (
    <>
      <div className="text-4xl md:text-5xl lg:text-7xl flex flex-row">
        Give Us a <BiSolidPhoneCall />
        all
      </div>
      <br />
      <p className="text-2xl md:text-3xl lg:text-4xl ">
        We Work 24/7, So You Don't Have To...
      </p>
      <p className="text-xs md:text-xl lg:text-2xl font-sans leading-relaxed text-[#2a3e40]">
        Our dedicated team monitors Unfiltered market (Reddit) and identify
        <b className="text-xs md:text-2xl lg:text-3xl">
          {" "}
          Potential customers
        </b>{" "}
        actively seeking products like yours. Through strategic engagement and
        authentic recommendations, we help
        <b className="text-xs md:text-2xl lg:text-3xl">
          {" "}
          position your brand
        </b>{" "}
        in meaningful conversations.
      </p>
    </>
  );
}

function LeftBoxPage3() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-7xl">
        How We’re Different from Reddit Ads...
      </h1>
      <p className="text-xs md:text-xl lg:text-2xl font-sans leading-relaxed text-[#2a3e40]">
        Create{" "}
        <b className="text-xs md:text-2xl lg:text-3xl">
          Direct impact on targeted user
        </b>{" "}
        who are searching for solution that you provides,
        <br />{" "}
        <b className="text-xs md:text-2xl lg:text-3xl">
          Unlike Reddit ads
        </b>{" "}
        that users skip and don't like to see. We place your products in
        meaningful conversations.
      </p>
    </>
  );
}
