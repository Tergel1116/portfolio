// import React from "react";

// export const About = () => {
//   return (
//     <div className="h-[826px] w-screen px-[80px] py-[96px] bg-gray-50  max-sm:h-[1434px]  max-sm:py-[64px] max-sm:px-[16px]">
//       <div className=" px-[32px] w-full flex flex-col items-center gap-[48px] ">
//         <div className="text-[14px] text-gray-600 h-[28px] w-[105px] rounded-[12px] bg-gray-200 flex items-center justify-center">
//           About me
//         </div>
//         <div className=" flex  w-screen justify-between   max-sm:flex max-sm:flex-col ">
//           <div className="flex justify-between">
//             <div className=" flex h-[558px] w-[350px] max-sm:pl-[120px] max-sm:w-[100vw]">
//               <img
//                 src="picture.jpg"
//                 alt=""
//                 className="h-[480px] w-[400px] max-sm:w-[50vw] max-sm:h-[300px] shadow-[-30px_30px_#E5E7EB] border-[8px] border-white"
//               />
//             </div>
//           </div>
//           <div className=" flex h-[558px] w-[100vw] flex-col gap-[24px] max-sm:ml-[30px] max-sm:w-[100vw]">
//             <div className="h-[36px] w-[60vw]  text-[30px] font-[700] max-sm:w-[100vw]">
//               Curious about me? Here you have it:
//             </div>
//             <div className="flex gap-[16px] flex-col  max-sm:w-[90vw]">
//               <div className="h-[96px] w-[50%] max-sm:w-[90vw] text-words">
//                 I'm a designer turned full stack developer, passionate about
//                 React.js and Node.js. I excel in blending technical and visual
//                 aspects to craft exceptional digital products, prioritizing user
//                 experience, precise design, and optimized code.
//               </div>
//               <div className="h-[96px] w-[50%] text-words max-sm:w-[90vw]">
//                 Since starting my web development journey in 2015, I've embraced
//                 challenges and kept up with the latest tech trends. Now in my
//                 early thirties, seven years in, I'm building cutting-edge web
//                 apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
//                 and more.
//               </div>
//               <div className="h-[96px] w-[50%] text-words max-sm:w-[90vw]">
//                 With a progressive mindset, I enjoy the entire product
//                 development process, from ideation to execution. Off duty,
//                 you'll find me on Twitter, tracking startup journeys, or
//                 unwinding. Follow me for tech insights and public project
//                 updates on Twitter or GitHub.
//               </div>
//               <div className="h-[24px] w-[20%] text-words max-sm:w-[90vw]">
//                 Finally, some quick bits about me.
//               </div>
//               <div className="h-[58px] w-[50%] flex ml-[20px] max-sm:w-[90vw]">
//                 <div className="h-[58px] w-[287px] text-words max-sm:w-[90vw]">
//                   <li className="text-words">B.E. in Computer Engineering</li>
//                   <li className="text-words">Full time freelancer</li>
//                 </div>
//                 <li className="h-[58px] w-[287px] text-words max-sm:w-[90vw]">
//                   Avid learner
//                 </li>
//               </div>
//               <div className="h-[48px] w-[50%] text-words max-sm:w-[90vw]">
//                 One last thing, I'm available for freelance work, so feel free
//                 to reach out and say hello! I promise I don't bite 😉
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const About = () => {
  return (
    <div className="h-[826px] w-screen px-[80px] py-[96px] bg-gray-50 max-sm:h-[1434px] max-sm:py-[64px] max-sm:px-[16px]">
      <div className="px-[32px] w-full flex flex-col items-center gap-[48px]">
        {/* Tag */}
        <div className="text-[14px] text-gray-600 h-[28px] w-[105px] rounded-[12px] bg-gray-200 flex items-center justify-center">
          About me
        </div>

        {/* CONTENT */}
        <div className="flex w-full justify-between max-sm:flex-col max-sm:items-center max-sm:gap-[40px]">
          {/* IMAGE BLOCK */}
          <div className="flex justify-center w-[350px] max-sm:w-[55vw] ">
            <img
              src="picture.jpg"
              alt=""
              className="h-[480px] w-[400px]  max-sm:w-[60vw] max-sm:h-[300px] shadow-[-30px_30px_#E5E7EB] border-[8px] border-white"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex flex-col gap-[24px] w-[60%] max-sm:w-full max-sm:mt-[40px] max-sm:ml-[0px]">
            <div className="text-[30px] font-[700]">
              Curious about me? Here you have it:
            </div>

            <p className="text-words">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>

            <p className="text-words">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>

            <p className="text-words">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>

            <div className="text-words font-semibold">
              Finally, some quick bits about me.
            </div>

            <div className="ml-[20px] text-words grid grid-cols-2 max-sm:grid-cols-1 gap-y-2">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
            </div>

            <p className="text-words">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
