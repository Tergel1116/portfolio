import { work } from "@/constants/work";

export const Work = () => {
  return (
    <div className="h-[1816px] py-[96px] px-[80px] max-sm:mt-[750px] max-sm:h-[2500px]">
      <div className=" h-[1656px] flex flex-col items-center justify-center gap-[48px] px-[32px] ">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-[14px] text-gray-600 h-[28px] w-[75px] rounded-[12px] bg-gray-200 flex items-center justify-center">
            Work
          </div>
          <div className="text-gray-600 text-5">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="flex flex-col gap-[48px] justify-center items-center">
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
                className="h-[480px] w-[100%] flex items-center justify-center rounded-[12px] bg-black max-sm:flex max-sm:flex-col! max-sm:h-[960px] max-sm:w-[90vw]"
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
                  className="h-[480px] w-[50%] flex bg-gray-100 rounded-[12px 12px 0px 0px
                  justify-center items-center bg-yellow-300 max-sm:w-[90vw]"
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
                    className="h-[348px] w-[480px] flex bg-F3F4F6 rounded-[12px] justify-center items-center "
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
                  className="h-[480px] w-[50%]"
                >
                  {stack.map(({ header, lorem, sources, button }) => (
                    <div className="p-[48px] flex flex-col gap-6">
                      <div className="text-gray-900 font-bold text-[20px]">
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
