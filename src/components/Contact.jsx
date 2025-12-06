import React from "react";

export const Contact = () => {
  return (
    <div className="h-[560px]  py-[96px] px-[80px] ">
      <div className="h-[368px]  flex flex-col items-center justify-center gap-[48px] ">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-[14px] text-words bg-gray-200  h-[28px] w-[122px]  flex items-center justify-center rounded-[12px]">
            Get in touch
          </div>
          <div className="text-words text-5 w-[450px] max-sm:w-[100vw] text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-[20px] ">
            <img src="/letter.png" alt="" className="h-[32px] w-[32px]" />
            <p className="text-[36px]">tergel@pinecone.mn</p>
            <img src="/copy.png" alt="" className="h-[32px] w-[32px]" />
          </div>
          <div>
            <div className="flex items-center gap-[20px] ">
              <img src="/call.png" alt="" className="h-[32px] w-[32px]" />
              <p className="text-[36px]">+976 99118811</p>
              <img src="/copy.png" alt="" className="h-[32px] w-[32px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-sm:text-center justify-center gap-2">
          <div>You may also find me on these platforms!</div>
          <div className="flex items-center gap-1">
            <img src="/github-icon.png" alt="" />
            <img src="/twitter.png" alt="" className="h-[25px]" />
            <img src="/figma.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
