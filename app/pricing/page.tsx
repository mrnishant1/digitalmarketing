"use client";
import React, { useState } from "react";
import "./page.css";
import { GiReturnArrow } from "react-icons/gi";
import { useRouter } from "next/navigation";
import useNotification from "@/components/ui/usenotification";
// import axios from "axios";
// import Checkout from "../paypal/checkout";

// --- Interfaces for Type Safety ---

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  highlight: boolean;
  color: string;
}

interface WaveDecorationProps {
  groupHoverClass: {
    layer1: string;
    layer2: string;
  };
}

interface PricingItemProps {
  plan: PricingPlan;
}

// --- Data for the Pricing Plans (Now Typed) ---
const pricingPlans: PricingPlan[] = [
  {
    title: "Micro Pack",
    price: "4.00",
    features: ["Adds 100 Credits", "One-Time Purchase", "4.0¢ per Credit"],
    highlight: false,
    color: "bg-[#4c4665]",
  },
  {
    title: "Value Pack",
    price: "15.00",
    features: [
      "Adds 500 Credits",
      "One-Time Purchase",
      "3.0¢ per Credit (Best Value)",
    ],
    highlight: false,
    color: "bg-[#4c4665]",
  },
  {
    title: "Bulk Pack",
    price: "25.00",
    features: [
      "Adds 1000 Credits",
      "One-Time Purchase",
      "2.5¢ per Credit (Max Discount)",
    ],
    highlight: false,
    color: "bg-[#4c4665]",
  },
];

// --- Reusable SVG Component for the Wave Decoration ---
const WaveDecoration: React.FC<WaveDecorationProps> = ({ groupHoverClass }) => {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-40" // pricing-deco-img
      enableBackground="new 0 0 300 100"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 300 100"
      x="0px"
      y="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* deco-layer--1: Moves right on hover */}
      <path
        className={`fill-white opacity-60 transition-transform duration-500 ease-in-out ${groupHoverClass.layer1}`}
        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
      />
      {/* deco-layer--2: Moves left on hover */}
      <path
        className={`fill-white opacity-60 transition-transform duration-500 ease-in-out ${groupHoverClass.layer2}`}
        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
      />
      {/* deco-layer--3: Static opacity 0.7 */}
      <path
        className="fill-white opacity-70"
        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z"
      />
      {/* deco-layer--4: Static opacity 1.0 (default) */}
      <path
        className="fill-white"
        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
      />
    </svg>
  );
};

async function handlePurchase(
  title: string,
  pushMessage: (message: string) => void
) {
  // const res = await axios.post('/API/create-order',{title})
  // if(res.status===200){
  //   pushMessage(res.data.message)
  // }
  // else{
  //   alert("fix it")
  // }
}

// --- Pricing Card Component ---
const PricingItem: React.FC<PricingItemProps> = ({ plan }) => {
  const { title, price, features, highlight, color } = plan;
  const { MessageRenderer, pushMessage } = useNotification();
  const [check, setcheck] = useState(false);

  // Conditional classes for the featured item
  const itemClasses = highlight
    ? "lg:my-0 lg:mx-0 z-10 lg:scale-105 shadow-2xl"
    : "lg:my-4 lg:mx-2"; // m-4 + margin adjustments for large screen

  const buttonClasses = highlight
    ? "bg-black hover:bg-gray-800" // Darker on featured
    : "bg-[#4d4766] hover:bg-[#100A13]"; // Original dark purple

  // Set up the complex hover translation for the deco layers
  const groupHoverClasses = {
    layer1: "group-hover/item:translate-x-4", // translates 16px (close to 15px)
    layer2: "group-hover/item:-translate-x-4", // translates -16px
  };

  // The 'group/item' class makes the whole card the parent for hover state
  return (
    <>
      {/* Notification */}
      <div className="absolute top-0 right-0 flex flex-col gap-5 z-[1000] p-[1%]">
        <MessageRenderer />
      </div>

      <div
        className={`pricing-item group/item flex flex-col hover:scale-[1.07] items-stretch text-center flex-1 w-full max-w-xs md:max-w-md lg:max-w-[330px] shadow-xl rounded-2xl m-4 bg-white text-[#84697c] font-[Open_Sans] transition-all duration-300 ${itemClasses}`}
      >
        {/* Pricing Decoration Area */}
        <div
          className={`pricing-deco relative ${color} pb-[40%] pt-[5%] rounded-t-2xl`}
        >
          <WaveDecoration groupHoverClass={groupHoverClasses} />

          {/* Price */}
          <div className="text-[#241e2f] mt-1 mb-1 leading-tight">
            <span className="text-sm align-top text-white"> $ </span>
            <span className="text-7xl font-bold">{price}</span>
            {/* <span className="text-sm pl-2  italic text-">/ mo</span> */}
          </div>

          {/* Title */}
          <h3 className="text-xs uppercase tracking-[5px] text-white mt-0">
            {title}
          </h3>
        </div>

        {/* Feature List */}
        <ul className="flex-grow list-none p-0 text-center mx-auto w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              className="px-8 py-4 border-b border-gray-100 last:border-b-0 text-gray-700"
            >
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button
          className={`font-bold mx-12 my-8 py-3 px-6 text-white rounded-full transition-colors duration-300 ${buttonClasses} hover:shadow-lg`}
          onClick={() => {
            pushMessage("Payment gatway yet to implement, Please Contact Us! ");
            //  handlePurchase(title, pushMessage)
            // setcheck(() => true);
          }}
        >
          {features[0]}
        </button>

        {/* {check && <Checkout title={title} />} */}
      </div>
    </>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-screen bg-[#FDEAD5] text-gray-800 relative overflow-hidden" // Original background color
    >
      <div className="text-center mb-16 px-4">
        <div
          className="p-[20px] text-7xl absolute cursor-pointer active:scale-[0.95] "
          onClick={() => router.back()}
        >
          <GiReturnArrow />
        </div>
        <h1 className="text-4xl md:text-7xl font- text-[#003566]">
          LeadZup Pricing Plans
        </h1>
        <p className="mt-2 text-xl text-gray-500">
          The Palden way to convert conversations into customers.
        </p>
      </div>

      <div className="pricing pricing-palden w-[70%] flex flex-wrap justify-center max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingItem key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default App;
