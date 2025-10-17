import React, { useState, useEffect } from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import "./page.css";
import { LiaReddit, LiaTelegram } from "react-icons/lia";
import Conversation from "./conversation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Homepage() {
  const router = useRouter()
  return (
    <div className="min-h-screen w-[100svw] h-[100svh] text-white flex flex-col p-3.5">
      <div className="flex w-full justify-between items-center bg-[#464242c2] rounded-2xl z-[100] ">
        <div className="text-6xl w-full leading-tight flex font-sans font-bold pl-4">
          LeadZup
        </div>
        {/* Nave Buttons */}
        <div className="font-sans hidden pr-[10%] md:flex flex-row w-[90%] justify-end space-x-8 text-2xl ">
          <Link
            href="#howitworks"
            className="hover:text-emerald-400 transition-colors hover:underline"
          >
            How We work
          </Link>
          {/* <Link
            href="#"
            className="hover:text-emerald-400 transition-colors hover:underline"
          >
            Other Services
          </Link> */}
          <Link
            href="/pricing"
            className="hover:text-emerald-400 transition-colors hover:underline"
          >
            Pricing
          </Link>
          {/* <a
            href="#"
            className="hover:text-emerald-400 transition-colors hover:underline"
          >
            About Us
          </a> */}
        </div>
      </div>

      <div className="relative flex w-full h-full">
        <div className="relative w-[100vw] h-[100svh] flex flex-col items-start p-x-[16] pt-2.5">
          {/* Right side  Images*/}
          <div className="absolute  right-[-100px] z-20">
            {/* svg dashed line */}
            <div className="float-x flex justify-center absolute left-[0%] bottom-[45%] items-center w-[100svw] h-[40svh] scale-[1.2]">
              <svg
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="dashed-line"
                  clipPath="url(#line-revealer)"
                  d="M373.348 61.0228C308.187 165.599 206.993 125.676 75.7278 180.348C22.3169 202.594 11.9678 250.272 16.9662 282.874"
                  stroke="black"
                  strokeOpacity="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="10 10"
                  className=""
                />

                <path
                  id="filled-shape"
                  clipPath="url(#shape-revealer)"
                  d="M412.783 3.32871C413.255 3.24661 413.748 3.43763 414.136 3.77542C414.504 4.141 414.671 4.6705 414.593 5.15771C412.219 19.81 406.928 45.2656 405.375 51.4013C405.283 51.6846 405.194 51.9594 405.106 52.1866C404.57 53.51 403.771 54.3266 402.881 54.6685C402.051 54.9878 401.105 54.9073 400.157 54.3866L399.968 54.2767C399.634 54.0639 399.16 53.5861 398.525 52.8873C398.21 52.5411 397.861 52.1472 397.477 51.7136C397.093 51.2805 396.674 50.8086 396.22 50.3091C394.404 48.3108 392.026 45.8637 389.057 43.6195L388.678 43.3313L388.678 43.3509C388.571 43.269 388.466 43.1943 388.365 43.1247C388.246 43.0429 388.134 42.966 388.022 42.8783L388.016 42.8735L388.009 42.8687L387.272 42.3821C386.479 41.8738 385.729 41.4451 385.039 41.0934C385.954 41.4955 386.98 42.0322 388.074 42.7412L388.077 42.7422C392.387 45.4603 396.298 49.4929 399.374 52.9413L399.374 52.9423C399.671 53.2838 400.021 53.5797 400.376 53.7804L400.376 53.7814C401.259 54.3019 402.097 54.3359 402.812 53.9649C403.513 53.6013 404.054 52.8704 404.411 51.9458C404.447 51.8543 404.499 51.6613 404.563 51.3968C404.63 51.1249 404.713 50.7602 404.812 50.3128C405.01 49.4177 405.27 48.1873 405.576 46.6975C406.189 43.7178 406.989 39.6969 407.853 35.2374C409.581 26.3187 411.567 15.6412 412.824 8.02092L412.825 8.01407C412.891 7.52431 412.969 7.04504 413.047 6.56897C413.126 6.09414 413.205 5.62127 413.272 5.14827L413.311 4.87746L412.924 4.88041L412.867 4.91698C412.688 5.0305 412.497 5.13377 412.297 5.24166C412.104 5.34601 411.902 5.45506 411.71 5.57623C410.685 6.14552 409.69 6.72349 408.763 7.24233C406.89 8.29153 405.071 9.33665 403.39 10.2405L403.387 10.2415C390.299 17.4761 375.202 25.0046 361.029 30.2257C358.596 31.0888 357.005 31.6167 355.976 31.9528L356.051 32.4112C356.707 32.4062 357.453 32.4 358.337 32.4397L358.337 32.4407C360.554 32.5637 364.021 33.0629 367.191 33.6602C368.775 33.9586 370.282 34.2806 371.517 34.591C372.754 34.9019 373.698 35.1962 374.181 35.4369L374.182 35.4369C374.682 35.7049 375.179 36.0617 375.584 36.5044L375.592 36.5131C376.028 36.9418 376.297 37.509 376.434 38.0419L376.438 38.0536C376.625 38.6449 376.671 39.1285 376.773 39.6673C376.821 39.9201 376.857 40.1627 376.895 40.4095C376.932 40.6551 376.969 40.9056 377.019 41.1684C378.106 48.3851 378.506 51.6622 378.953 54.8083L379.02 55.2785L379.352 54.94L379.407 54.8849C383.185 50.6694 384.259 49.1512 386.862 45.7984C387.465 45.0213 387.878 44.5319 388.167 44.2269C388.463 43.915 388.608 43.8185 388.675 43.7913L388.682 43.7884L388.682 43.8079C388.682 43.8938 388.644 44.0776 388.467 44.4687C388.293 44.8517 387.998 45.4085 387.514 46.23C385.483 49.6101 382.889 52.9063 380.286 55.8792L380.284 55.8802C379.96 56.2564 379.624 56.6329 379.276 57.0158L378.195 58.1911C378.118 58.2688 378.043 58.3534 377.971 58.436L377.943 58.1872L377.94 58.1745L377.875 57.759C377.855 57.6202 377.837 57.4805 377.818 57.3395C377.781 57.0621 377.743 56.7792 377.694 56.4957C377.096 51.9427 376.649 48.8494 375.7 41.3435L375.7 41.3386L375.495 39.8343C375.425 39.3302 375.349 38.8397 375.25 38.4123L375.248 38.4005L375.244 38.3889L375.133 38.0772C375.016 37.7691 374.878 37.4755 374.676 37.2369C374.414 36.9269 374.055 36.6786 373.675 36.4447L373.676 36.4447L373.666 36.4389L373.491 36.3514C373.031 36.1386 372.208 35.8687 371.187 35.5731C370.008 35.2322 368.537 34.8504 366.983 34.4772C363.875 33.7314 360.42 33.0159 358.293 32.7252C357.42 32.5905 356.654 32.5026 356.03 32.4368C355.401 32.3704 354.929 32.3271 354.63 32.2834L354.612 32.2816L354.595 32.2817C354.534 32.2822 354.486 32.2786 354.45 32.276C354.545 32.1951 354.739 32.0708 355.119 31.8773L355.124 31.8744C355.906 31.4523 357.532 30.74 360.719 29.3989L360.72 29.3989C374.815 23.3719 386.287 18.0216 402.709 8.92241L402.708 8.92144C403.964 8.24595 405.293 7.48182 406.679 6.70355L408.085 5.92325L408.095 5.91732C409.029 5.34711 409.996 4.83259 410.99 4.25454L410.994 4.25158C411.105 4.18332 411.23 4.11456 411.359 4.04273C411.487 3.97182 411.621 3.89731 411.742 3.823L411.745 3.82103L412.119 3.58379L412.121 3.58279C412.133 3.57627 412.151 3.56729 412.169 3.55606C412.196 3.53931 412.24 3.50922 412.28 3.47318C412.284 3.47165 412.291 3.46947 412.303 3.46519C412.318 3.46001 412.348 3.44981 412.377 3.43631C412.393 3.42903 412.412 3.41879 412.431 3.40562C412.562 3.36162 412.656 3.3336 412.744 3.33291L412.764 3.33276L412.783 3.32871ZM412.211 6.13297C412.219 6.13475 412.229 6.13844 412.271 6.17938C412.29 6.19825 412.299 6.20746 412.303 6.21332C412.305 6.21686 412.304 6.21765 412.304 6.21819C412.305 6.22277 412.31 6.26866 412.247 6.39344C412.12 6.64821 411.782 7.09793 411.012 7.92733L411.01 7.93028C409.527 9.57751 406.365 12.646 400.162 18.6609C387.153 31.2069 383.568 34.7065 381.099 36.9769L381.09 36.9848C380.999 37.0778 380.91 37.1652 380.824 37.2495C380.738 37.3334 380.655 37.415 380.578 37.4936C380.424 37.6496 380.282 37.8046 380.176 37.9664L380.168 37.9802C380.067 38.1604 380.008 38.3297 379.991 38.4962C379.967 38.3807 379.991 38.2088 380.074 37.9975L380.077 37.9877L380.08 37.9769C380.138 37.7797 380.247 37.5933 380.389 37.4042C380.534 37.2118 380.698 37.0345 380.868 36.8371C385.61 31.3135 393.898 22.7091 399.162 17.648L399.163 17.647C405.362 11.6368 408.667 8.70621 410.432 7.29112L410.434 7.28915C411.298 6.57744 411.763 6.27904 412.024 6.17443C412.149 6.12431 412.199 6.13042 412.211 6.13297Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.469587"
                  data-darkreader-inline-fill=""
                  data-darkreader-inline-stroke=""
                ></path>
              </svg>
            </div>
            {/* Girl image section */}
            <Image
              src={`/girloutpost.png`}
              alt={`Image`}
              width="630"
              height="614"
              className="z-[50]"
              style={{
                filter: "drop-shadow(6px 2px 2px black)",
                scale: 1,
              }}
            />
            {/* reach */}
            <Image
              src={`/reach.png`}
              alt={`Image`}
              width="150"
              height="250"
              className="float-y z-indx-1 p-rlte zws-bnnr-img absolute left-[-20%] bottom-[45%] "
              style={{
                filter: ")",
                boxShadow: "2px 2px 2px black",
              }}
            />
            <div
              className="float-y flex justify-center absolute left-[30%] bottom-[25%] items-center  text-xl rounded-[0px 10px 0px 10px] backdrop-blur-sm bg-[#83b1be57] z-indx-1 p-rlte zws-bnnr-img "
              style={{
                borderRadius: "10px",
                boxShadow: "2px 2px 2px black",
              }}
            >
              <div className="flex flex-col font-sans text-black text-xl  p-8">
                <span>I think,</span>
                <span>You would like!</span>
                <span>this brand</span>
              </div>
            </div>
            <div
              className="float-x flex justify-center absolute left-[1%] bottom-[1%] items-center backdrop-blur-3xl text-xl rounded-[0px 10px 0px 10px]  z-indx-1 p-rlte zws-bnnr-img "
              style={{
                borderRadius: "5px 5px 5px 5px",
                boxShadow: "2px 2px 2px black",
              }}
            >
              <div className="flex font-sans text-[#000] text-xl ">
                <LiaReddit /> Posted Successfully
              </div>
            </div>
          </div>
          {/* conversation */}
          <Conversation />

          {/* Center Attraction */}
          <div className="w-[100%] h-[90%] flex flex-col gap-3.5  bg-[#708F92] rounded-4xl p-[5%] border-2 border-black">
            {/* Below LeadZup */}
            <div className="w-[100%] h-[100%] relative flex rounded-4xl ">
              {/* Left */}
              <div className=" flex flex-col gap-3.5">
                <div className="text-[#fff]">
                  <h1 className="text-8xl ">We</h1>
                  <h1 className="text-8xl ">Convert</h1>
                  <h1 className="text-8xl ">Conversation</h1>
                  <h1 className="text-8xl ">INTO Customers</h1>

                  <p className="font-sans max-w-md text-xl leading-relaxed">
                    Attract the customers not the crowd.
                  </p>
                </div>
                <div>
                  <a href="#contactform" className="text-2xl font-sans font-bold bg-[#4F5E60] rounded-4xl p-3.5 m-3.5 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
                    Contact Us
                  </a>
                  <button className="text-2xl font-sans font-bold bg-[#4F5E60] rounded-4xl p-3.5 m-3.5 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
                    Book Free trial
                  </button>
                </div>
                {/* Social  */}
                <div className="flex space-x-6 items-center z-[100]">
                  <>
                    <a
                      href="#"
                      className="p-2 hover:bg-[#433E3F] hover:text-white rounded-full transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-[#433E3F] hover:text-white rounded-full transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-[#433E3F] hover:text-white rounded-full transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
