import React from "react";
import './loading.css'

const Loading = ({text}:{text:string}) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="cont hover:scale-[1.1] active:scale-[0.95] cursor-pointer transition-all duration-100">
        <div className="is-animate">
          {/* <div className="l"><BsGoogle/></div> */}
            {text?.split("").map((items,i)=>(
                <div className="l" key={i}>{items}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
