import { work } from "@/constants/work";

export const Work = () => {
  return (
    <div className="h-[1816px] py-[96px] px-[80px] max-sm:mt-[550px] max-sm:h-[2500px]">
      <div className=" h-[1656px] flex flex-col items-center justify-center gap-[48px] px-[32px] ">
        <div className="flex flex-col  items-center justify-center max-sm:text-center">
          <div className="text-[14px]  text-gray-600 h-[28px] w-[75px] rounded-[12px] bg-gray-200 flex items-center justify-center">
            Work
          </div>
          <div className="text-gray-600 text-5">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="flex  flex-col gap-[48px] max-sm:gap-[100px] justify-center items-center">
          {work.map(
            (
              {
                height,
                width,
                width1,
                image,
                height1,
                width2,
                reverse,
                stack,
                border,
              },
              index
            ) => (
              <div
                // style={{
                //   // height: height,
                //   height: height,
                //   width: width,
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   boxShadow: "0px 5px 2px #0000000F",
                //   borderRadius: "12px",
                //   backgroundColor: "black",
                //   // flexDirection: "column",
                // }}
                style={{
                  display: "flex",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
                className=" h-[380px]   max-sm:gap-[0px] shadow-lg w-[100%] flex items-center justify-center rounded-[12px]  max-sm:flex max-sm:flex-col! max-sm:h-[830px] max-sm:w-[90vw]"
              >
                <div
                  // style={{
                  //   height: height,
                  //   width: width1,
                  //   display: "flex",
                  //   backgroundColor: "#F3F4F6",
                  //   borderRadius: border,
                  //   // borderRadius: "12px 0px 0px 12px",
                  //   // borderRight: "1px solid gray",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   backgroundColor: "yellow",
                  // }}
                  style={{ borderRadius: border }}
                  className="h-[100%] w-[100%]  flex bg-gray-100 bg-gray-100 
                  justify-center items-center  max-sm:w-[90vw]  max-sm:rounded-[12px_12px_0px_0px]"
                >
                  <img
                    src={image}
                    alt=""
                    // style={{
                    //   height: height1,
                    //   // width: width2,
                    //   // width: "600px",
                    //   borderRadius: "12px",
                    //   boxShadow: "0px 5px 2px #0000000F",
                    //   objectFit: "cover",

                    // adsfasdfsadf
                    // }}
                    className="h-[90%]  w-[90%] max-sm:h-[90%] max-sm:w-[90%] flex bg-F3F4F6 rounded-[12px] justify-center items-center "
                  />
                </div>
                <div
                  // style={{
                  //   height: height,
                  //   width: width1,
                  //   backgroundColor: "red",
                  //   display: "flex",
                  //   gap: "20px",
                  //   borderRadius: "12px",
                  // }}
                  className="h-[100%] w-[100%]  max-sm:p-[20px] max-sm:rounded-bl-[12px] max-sm:rounded-br-[12px]  max-sm:h-[650px]"
                >
                  {stack.map(({ header, lorem, sources, button }) => (
                    <div className="p-[28px]  max-sm:p-0 flex flex-col max-sm:flex-col gap-[24px] max-sm:gap-[50px]">
                      <div className="text-gray-900 mt-[0px] font-bold text-[20px]">
                        {header}
                      </div>
                      <div className="text-words h-[96px] w-[100%]">
                        {lorem}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {sources.map((source) => (
                          <div className="">
                            <div className="bg-gray-200 py-1 px-5 rounded-[12px] text-words">
                              {source}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <img src={button} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* </div> */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
