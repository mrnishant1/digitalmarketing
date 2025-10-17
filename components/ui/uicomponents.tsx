import { LiaHeart, LiaComment } from "react-icons/lia";
import { FaTelegram } from "react-icons/fa";
export function PostCard({Text}:{Text:string}) {
  return (
    <>
      <div className="posts w-[300px] h-[400px] bg-white rounded-2xl flex flex-col justify-between items-center p-3.5">
        <div className="bg-white border-2 w-[250px] h-[10%] flex items-center p-1">
          <div className="h-[30px] w-[30px] rounded-[100%] bg-[#54525281]"></div>
          <b className="text-2xl font-thin text-[#00000087]">Users</b>
        </div>
        <div className="bg-white border-2 w-[250px] h-[60%] "></div>
        <div className="bg-white border-2 w-[250px] h-[30%] rounded-xl p-3.5">
          <div className="flex basis-0 grow-1 shrink-0 gap-1.5">
            <LiaHeart className="text-[#494646] text-3xl hover:cursor-pointer" />
            <LiaComment className="text-[#494646] text-3xl hover:cursor-pointer" />
            <FaTelegram className="text-[#494646] text-3xl hover:cursor-pointer" />
          </div>
          <div className="flex flex-col shrink-0 basis-0 grow-0">
            <b className="text-sky-300 font-bold grow-0 basis-0 shrink-0">
              #wantsuggestion #productReview
            </b>
            <b className="text-black font-thin grow-0 basis-0 shrink-0 ">
              {Text}
            </b>
          </div>
        </div>
      </div>
    </>
  );
}
export function PostCardMini({Text}:{Text:string}) {
  return (
    <>
      <div className="posts w-[240px] bg-white rounded-2xl flex flex-col items-center p-3.5">
        <div className="bg-white border-2 w-[250px] h-[10%] flex items-center p-1">
          <div className="h-[20px] w-[20px] rounded-[100%] bg-[#54525281]"></div>
          <b className="text-md font-thin text-[#00000087]">Users</b>
        </div>
        <div className="bg-white border-2 w-[250px] h-[30%] rounded-xl p-3.5">
          <div className="flex flex-col shrink-0 basis-0 grow-0">
            <b className="text-sky-300  grow-0 basis-0 shrink-0">
              #wantsuggestion #productReview
            </b>
            <b className="text-black font-thin grow-0 basis-0 shrink-0 ">
              {Text}
            </b>
          <div className="flex basis-0 grow-1 shrink-0 gap-1.5">
            <LiaHeart className="text-[#494646] text-3xl hover:cursor-pointer" />
            <LiaComment className="text-[#494646] text-3xl hover:cursor-pointer" />
            <FaTelegram className="text-[#494646] text-3xl hover:cursor-pointer" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function ReplyCard({reply, fontsize}: {reply:string, fontsize?:number}) {
  return (
    <>
      <div
        className="shrink-0  text-black p-[10px] bg-[#fff]"
        style={{
          borderRadius: "0px 20px 0px 20px",
          fontSize:`${fontsize||24}px`
        }}
      >
        <div
          className="w-full h-full font-sans flex justify-center items-center"
          style={{ borderRadius: "0px 20px 0px 20px" }}
        >
          {reply}
        </div>
      </div>
    </>
  );
}
