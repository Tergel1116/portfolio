import { experience } from "@/constants/experience";

export const Experience = () => {
  return (
    <div className="h-[1270px]  bg-gray-50 py-[96px] px-[80px] max-sm:h-[1308px] max-sm:w-[100vw]">
      <div className="h-[948px] max-sm:w-[100vw] flex flex-col   gap-[48px] max-sm:h-[1308px] max-sm:w-[90vw]">
        <div className="flex flex-col justify-center items-center h-[72px] gap-[16px] max-sm:w-[60vw]">
          <div className="text-[14px] text-gray-600 bg-gray-200 h-[28px] w-[115px]  flex items-center justify-center rounded-[12px] ">
            Experience
          </div>
          <div className="text-gray-600 text-5">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex flex-col  gap-[48px]  max-sm:h-[500px] max-sm:w-[200px]">
          {experience.map(
            ({
              height,
              width,
              image,
              text,
              text1,
              text2,
              text3,
              date,
              position,
            }) => (
              <div
                className=" max-sm:w-[50vw]  max-sm:flex max-sm:flex-col flex p-[32px] justify-between bg-white rounded-[12px] shadow-soft p-[32px] gap-[48px]  "
                style={{
                  display: "flex",
                  padding: "32px",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 5px 2px #0000000F",
                  padding: "32px",
                  gap: "48px",
                  height: height,
                }}
                // style={{ boxShadow: "0px 5px 2px #0000000F" }}
              >
                <div className="w-[200px]">
                  <img src={image} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-[20px]">{position}</div>
                  <ul className="h-[180px] w-[384px]  ml-[20px] max-sm:w-[200px]">
                    <li className="text-words list-disc">{text}</li>
                    {text1 && <li className="text-words list-disc">{text1}</li>}
                    {text2 && <li className="text-words list-disc">{text2}</li>}
                    {text3 && <li className="text-words list-disc">{text3}</li>}
                  </ul>
                </div>
                <div className="text-words">{date}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
