import { PostCard, ReplyCard } from "@/components/ui/uicomponents";
import { useEffect, useState } from "react";
import "./page.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
// import RightBoxPage2 from "./rightbox2";

export default function Page4() {
  const [scrollPercentageY, setscrollPercentageY] = useState<number>(0);
  const [resizedScreen, setresizedScreen] = useState<number>(0);
  // console.log(scrollPercentageY);

  useEffect(() => {
    setresizedScreen(window.innerWidth);
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
    return (
      <>
        <div className="flex flex-col">
          <div className="h-[100vh] w-[100vw] relative  inset-0 bg-[#FDEAD5] z-30 flex items-center justify-center p-4.5 overflow-hidden">
            {RightBoxPage1(scrollPercentageY)}
          </div>
          <div className="h-[100vh] w-[100vw] relative flex flex-col text-white items-center justify-center p-8">
            <LeftBoxPage1 />
          </div>
          <div className="h-[100vh] w-[100vw] relative  inset-0 bg-[#FDEAD5] z-30 flex items-center justify-center p-4.5">
            {RightBoxPage3(scrollPercentageY, resizedScreen)}
          </div>
          <div className="h-[60vh] w-[100vw] relative  flex flex-col text-white items-center justify-center p-8">
            <LeftBoxPage3 />
          </div>
          <div className="h-[120vh] w-[100vw] relative  inset-0 bg-[#FDEAD5] z-30 flex items-center justify-center p-4.5">
            {RightBoxPage2(scrollPercentageY)}
          </div>
          <div className="h-[80vh] w-[100vw] relative flex flex-col text-white items-center justify-center p-8">
            <LeftBoxPage2 />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Right side - scrolls normally */}
      <div className="w-[50%] h-[300vh] flex flex-col">
        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[500px] space-y-[5%] ">
            <LeftBoxPage1 />
          </div>
        </div>
        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[500px] space-y-[5%]">
            <LeftBoxPage3 />
          </div>
        </div>
        <div className="h-[100vh] flex flex-col text-white items-center justify-center p-8">
          <div className="w-[500px] space-y-[5%] ">
            <LeftBoxPage2 />
          </div>
        </div>
      </div>

      {/* Left side - stays fixed */}
      <div className="sticky top-0 h-[100vh] w-[50%] z-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FDEAD5] z-30 flex items-center justify-center p-4.5 ">
          {RightBoxPage1(scrollPercentageY)}
          {RightBoxPage3(scrollPercentageY, resizedScreen)}
          {RightBoxPage2(scrollPercentageY)}
        </div>
      </div>
    </>
  );
}

function RightBoxPage1(scrollPercentageY: number) {
  const triggerpoint = 34;
  const lastPoint = 50;
  return (
    <>
      <div
        className="flex flex-col relative top-0 h-[100%] w-full justify-end items-center "
        style={{
          opacity:
            scrollPercentageY < triggerpoint || scrollPercentageY > lastPoint
              ? 0
              : 1,
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
            className="subgroup top-0 right-[70px] z-[5] absolute rounded-2xl"
            style={
              scrollPercentageY >= triggerpoint
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
            className="subgroup top-0 left-[70px] z-[4] absolute rounded-2xl"
            style={
              scrollPercentageY >= triggerpoint
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
              scrollPercentageY >= triggerpoint
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
            scrollPercentageY > triggerpoint + 3 &&
            scrollPercentageY < lastPoint
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
          className="thebrand text-2xl md:text-3xl lg:text-6xl text-black "
          style={{
            opacity: scrollPercentageY < lastPoint ? 0.3 : 1,
            transition: "all",
            transitionDuration: "1s",
            zIndex: 50,
          }}
        >
          Don't worry if Can't Reach
        </div>
      </div>
    </>
  );
}

function RightBoxPage2(scrollPercentageY: number) {
  const triggerpoint = 65;
  const lastpoint = 80;

  return (
    <div
      className="flex flex-col absolute top-0 h-[100%] w-full justify-center items-center "
      style={{
        opacity:
          scrollPercentageY < triggerpoint || scrollPercentageY > lastpoint
            ? 0
            : 1,
        transition: "all",
        transitionDuration: "400ms",
      }}
    >
      {/* MessageBody outline */}
      <div className=" w-[70%] lg:h-[90%] md:h-[80%] h-[70%] relative p-3.5 border-2 rounded-2xl overflow-hidden flex flex-col ">
        {/* Inside messages */}
        <div
          style={
            scrollPercentageY >= triggerpoint
              ? {
                  transform: `translateY(${
                    scrollPercentageY >= triggerpoint + 2
                      ? `${-Math.max(
                          (scrollPercentageY - triggerpoint) * 10,
                          400
                        )}px`
                      : "0px"
                  })`,
                  transition: "transform 0.6s ease",
                  // transitionDuration: "1s",
                  transitionDelay: `${
                    scrollPercentageY < triggerpoint ? "0s" : "2s"
                  }`,
                }
              : { opacity: 0 }
          }
        >
          {Messages(scrollPercentageY, triggerpoint, lastpoint)}
        </div>

        <div className="w-[95%] h-[30px] flex justify-center items-center text-[#2f2e2e] absolute bottom-[10px] bg-[#ffffff5c] rounded-2xl border-2 border-[#ffffffc5]">
          Typing....
        </div>
      </div>
    </div>
  );
}

function RightBoxPage3(scrollPercentageY: number, resizedscreen: number) {
  const startpoint = 51;
  const lastpoint = 64;
  return (
    <div
      className="flex flex-row gap-0 absolute top-0 h-[100%] w-full justify-center items-center "
      style={{
        opacity:
          scrollPercentageY > startpoint && scrollPercentageY < lastpoint
            ? 1
            : 0,
        transition: "all",
        transitionDuration: "400ms",
      }}
    >
      <div className="h-[80%] w-[40%] text-3xl md:text-5xl lg:text-7xl text-center bg-amber-300 flex justify-center rounded-tl-2xl rounded-bl-2xl">
        Reddit Ads
      </div>
      <Image
        className="absolute z-0 "
        alt="Users stickman running away from spam ads"
        src={"/stickman.svg"}
        width={"70"}
        height={"100"}
        style={{
          transform: `${
            resizedscreen < 550
              ? "scaleX(-2.5) scaleY(2.5)"
              : "scaleX(-4) scaleY(4)"
          }`,
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

export function Messages(
  scrollPercentageY: number,
  triggerpoint: number,
  lastPoint: number
) {
  return (
    <div className="flex flex-col gap-2.5">
      <div
        style={{
          transform: `translateY(${
            scrollPercentageY >= triggerpoint ? 0 : 1000
          }px)`,
          transition: "all",
          transitionDuration: "600ms",
          opacity: scrollPercentageY >= triggerpoint ? 1 : 0,
        }}
      >
        <PostCard Text="Help me to find the product, what would be the best to go with?" />
      </div>
      <div
        className="w-full flex justify-end "
        style={{
          transform: `translateY(${
            scrollPercentageY >= triggerpoint ? 0 : 1000
          }px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= triggerpoint ? 1 : 0}s`,
          opacity: scrollPercentageY >= triggerpoint ? 1 : 0,
        }}
      >
        <ReplyCard reply="I think you would like this one, try this brand" />
      </div>
      <div
        style={{
          transform: `translateY(${
            scrollPercentageY >= triggerpoint ? 0 : 1000
          }px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= triggerpoint ? 2 : 0}s`,
          opacity: scrollPercentageY >= triggerpoint ? 1 : 0,
        }}
      >
        <PostCard Text="That was great, thanks for the suggestion you gave me." />
      </div>
      <div
        className="w-full flex justify-end "
        style={{
          transform: `translateY(${
            scrollPercentageY >= triggerpoint ? 0 : 1000
          }px)`,
          transition: "all",
          transitionDuration: "600ms",
          transitionDelay: `${scrollPercentageY >= triggerpoint ? 3 : 0}s`,
          opacity: scrollPercentageY >= triggerpoint ? 1 : 0,
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
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#003566]">
        Thousands of users actively searching for products you offer.
      </h1>
      <p className="text-xs md:text-xl lg:text-2xl font-sans leading-relaxed text-[#2a3e40]">
        <b className="text-2xl md:text-3xl lg:text-4xl ">
          Stop missing them. Be part of them—with Our precision targeting and
          authentic engagement
        </b>{" "}
        Partner with us to connect your brand to the right
        audience—authentically and at scale.
      </p>

      <div className="text-3xl md:text-4xl lg:text-6xl self-end text-[#003566]">
        Break the barrier.
      </div>
    </>
  );
}

function LeftBoxPage2() {
  return (
    <>
      <div className="text-4xl md:text-5xl lg:text-7xl flex flex-row text-[#003566]">
        Give Us a <BiSolidPhoneCall />
        all
      </div>
      <br />
      <p className="text-2xl md:text-3xl lg:text-4xl text-[#003566]">
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
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#003566]">
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
