import React from "react";

export const Introduction = () => {
  return (
    <div className="h-[556px] w-screen max-sm:w-[100vw] px-[80px] py-[96px] max-sm:h-[904px] max-sm:px-4 max-sm:py-16">
      <div className="flex gap-[48px] justify-between max-sm:flex-col-reverse max-sm:flex max-sm:flex-col">
        <div className=" flex gap-[48px] flex-col">
          <div className="h-[176px] w-[600px] max-sm:w-[100vw]">
            <div className="text-[60px] font-bold">Hi, I’m Tergel 👋</div>
            <div className="text-words">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </div>
          </div>
          <div className="flex gap-[8px] text-words">
            <p>
              <img src="location.png" alt="" />
            </p>
            Ulaanbaatar, Mongolia
          </div>
          <div className="flex gap-[8px] text-words">
            <p>
              <img src="available.png" alt="" />
            </p>
            Available for new projects
          </div>
          <div className="flex items-center gap-[16px] ">
            <div>
              <img src="github-icon.png" alt="" />
            </div>
            <div>
              <img src="twitter.png" alt="" />
            </div>
            <div>
              <img src="figma.png" alt="" />
            </div>
          </div>
        </div>

        <div className=" flex h-[364px] w-[568px] max-sm:w-[50vw] items-end justify-end max-sm:flex max-sm:justify-center max-sm:items-center">
          <img
            src="picture.jpg"
            alt=""
            className="h-[320px] w-[280px] max-sm:w-[100vw] shadow-[20px_20px_#E5E7EB] border-[8px] border-white  max-sm:object-cover max-sm:border-r-8 max-sm:border-white max-sm:shadow-gray p-4"
          />
        </div>
      </div>
    </div>
  );
};
