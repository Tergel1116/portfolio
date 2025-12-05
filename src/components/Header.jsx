import React from "react";
import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  return (
    <div className="flex h-[68px] w-screen justify-between pt-[16px] pb-[16px] pr-[80px] pl-[80px] max-sm:flex max-sm:justify-between max-sm:p-4  max-sm:w-[100vw] ">
      <div className="flex items-center max-sm:flex max-sm:justify-between w-full max-sm:w-[100vw]">
        <p className={rubik.className}>TERGEL</p>
        <div className="max-sm:block hidden">
          <img src="/menu.png" alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center max-sm:hidden">
        <div className=" text-[16px] text-gray-600">About</div>
        <div className="text-[16px] text-gray-600">Work</div>
        <div className=" text-[16px] text-gray-600">Testimonials</div>
        <div className="text-[16px] text-gray-600">Contact</div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <img src="Icon.png" alt="" />
          </div>
          <div className="text-[16px] bg-gray-900 py-[6px] px-[16px] text-white h-[36px] w-[136px] rounded-[12px]">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
