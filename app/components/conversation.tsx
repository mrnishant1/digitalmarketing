import { PostCardMini, ReplyCard } from "@/components/ui/uicomponents";
import React from "react";

const Conversation = () => {
  return (
    <div
      className="absolute right-[400px] z-[21] w-[30%] h-[60%] bg-[#ffffff71] overflow-hidden border-2 border-teal-50 rounded-2xl"
      style={{transform: "matrix3d(1, 0.2, 0, 0,0, 1.1, 0, 0,0, 0, 1, 0,-150, 100, 300, 1) rotateX(10deg)",
        
      }}
    >
      <div className="flex flex-col gap-2.5">
        <div
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // opacity: 0,
            }
          }
        >
          <PostCardMini Text="Help me to find the product, what would be the best to go with?" />
        </div>
        <div
          className="w-full flex justify-end "
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // transitionDelay: `${0}s`,
              // opacity: 0,
            }
          }
        >
          <ReplyCard
            fontsize={14}
            reply="I think you would like this one, try this brand"
          />
        </div>
        <div
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // transitionDelay: `${0}s`,
              // opacity: 0,
            }
          }
        >
          <PostCardMini Text="That was great, thanks for the suggestion you gave me." />
        </div>
        <div
          className="w-full flex justify-end "
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // transitionDelay: `${0}s`,
              // opacity: 0,
            }
          }
        >
          <ReplyCard fontsize={14} reply="your most welcome!" />
        </div>
        <div
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // transitionDelay: `${0}s`,
              // opacity: 0,
            }
          }
        >
          <PostCardMini Text="I need one more suggestion for *------*." />
        </div>
        <div
          className="w-full flex justify-end "
          style={
            {
              // transform: `translateY(${0}px)`,
              // transition: "all",
              // transitionDuration: "600ms",
              // transitionDelay: `${0}s`,
              // opacity: 0,
            }
          }
        >
          <ReplyCard fontsize={14} reply="I remember once I used one it was great and would help you, its affordable as well!" />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
