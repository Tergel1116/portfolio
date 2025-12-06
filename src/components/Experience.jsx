import { experience } from "@/constants/experience";

export const Experience = () => {
  return (
    <div className="bg-gray-50 py-[96px] px-[80px] max-sm:px-[16px] max-sm:py-[64px]">
      <div className="flex flex-col gap-[48px] w-full">
        {/* TITLE */}
        <div className="flex flex-col justify-center items-center gap-[16px] text-center">
          <div className="text-[14px] text-gray-600 bg-gray-200 h-[28px] w-[115px] flex items-center justify-center rounded-[12px]">
            Experience
          </div>
          <div className="text-gray-600 max-sm:text-[14px]">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="flex flex-col gap-[48px] w-full">
          {experience.map(
            ({ image, text, text1, text2, text3, date, position }) => (
              <div
                className="w-full flex bg-white rounded-[12px] shadow-lg p-[32px] gap-[32px]
                           max-sm:flex-col max-sm:p-[20px]"
              >
                {/* IMAGE */}
                <div className="w-[140px] max-sm:w-[100px]">
                  <img src={image} alt="" className="w-full h-auto" />
                </div>

                {/* TEXT SECTION */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="text-[20px] font-semibold">{position}</div>

                  <ul className="ml-[20px] flex flex-col gap-2 text-words max-sm:ml-[10px]">
                    <li className="list-disc">{text}</li>
                    {text1 && <li className="list-disc">{text1}</li>}
                    {text2 && <li className="list-disc">{text2}</li>}
                    {text3 && <li className="list-disc">{text3}</li>}
                  </ul>
                </div>

                {/* DATE */}
                <div className="text-words whitespace-nowrap max-sm:mt-[10px]">
                  {date}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
