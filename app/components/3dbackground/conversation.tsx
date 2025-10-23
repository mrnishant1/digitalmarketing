import { PostCardMini, ReplyCard } from "@/components/ui/uicomponents";
import React from "react";
import "./conversation.css";

const Conversation = () => {

  return (
    <div className="container h-[150px] w-[120px] md:h-[150px] md:w-[120px] lg:h-[200px]  lg:w-[270px] text-[10px] absolute right-[400px] z-[21] bg-[#ffffff71] overflow-hidden border-2 border-teal-50 rounded-2xl">
      <div className="flex flex-col gap-2.5">
        <div>
          <PostCardMini
            Text={"suggest me the product, what would be the best to go with?"}
          />
        </div>
        <div className="w-full flex justify-end ">
          <ReplyCard
            fontsize={14}
            reply="I think you would like this one, try this brand"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Conversation;
