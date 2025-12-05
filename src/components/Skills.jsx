import { skills } from "@/constants/skill";

export const Skills = () => {
  return (
    <div className="h-[560px] max-sm:w-[100vw]  w-screen py-[96px] px-[80px] flex flex-col max-sm:py-[0px] max-sm:px-[0px] items-center justify-center max-sm:h-[916px]">
      <div className="flex flex-col gap-[48px] h-[368px] w-screen max-sm:w-[100vw] max-sm:h-[800px] max-sm:w-screen">
        <div className="flex flex-col justify-center items-center h-[72px] gap-4 max-sm:w-[100vw]">
          <div className="text-[14px] text-gray-600 bg-gray-200 h-[28px] w-[75px] flex items-center justify-center rounded-[12px] ">
            Skills
          </div>
          <div className="text-gray-600 text-5">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="flex flex-col gap-[48px]">
          <div className=" max-sm:grid max-sm:grid-cols-3 max-sm:grid-rows-6 grid grid-cols-8 grid-rows-2 gap-[48px] h-[248px] max-sm:h-[664px] w-[screen] ">
            {skills.map((item) => (
              <div className="flex flex-col gap-[8px] items-center">
                <img src={item.image} alt="" style={{ height: item.height }} />
                <p className="text-words">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
