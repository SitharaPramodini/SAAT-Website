// import { Button } from "../../shared/Button";
// import { Container } from "../../shared/Container";
// import { Paragraph } from "../../shared/Paragraph";
// // import { Numbers } from "./Numbers";
// import hero from "/hero.png";

// export const Hero = () => {
//   return (
//     <section className="relative pt-32 lg:pt-36 h-screen bg-gradient-to-r from-[#1c64f23d] to-[#7c3aed24]">
//       <Container className="flex flex-col gap-10 lg:flex-row lg:gap-12">
//         <div className="absolute inset-y-0 w-full lg:w-1/2 lg:right-0">
//           <span
//             className="absolute hidden w-24 h-24 rotate-90 skew-x-12 -left-6 md:left-4 top-24 lg:top-28 // rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block"
//           ></span>
//           <span className="absolute w-24 h-24 right-4 bottom-12 rounded-3xl bg-primary blur-xl opacity-80"></span>
//         </div>

//         <div
//           className="relative flex flex-col items-center max-w-3xl mx-auto text-center lg:text-left lg:py-8 lg:items-start // lg:max-w-none lg:mx-0 lg:flex-1 lg:w-1/2"
//         >
//           <h1 className="text-3xl font-bold text-heading-1 sm:text-4xl md:text-5xl xl:text-5xl">
//             Transform Education with  
//             <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
//               SAAT
//             </span>
//           </h1>
//           <p className="max-w-2xl my-4 font-semibold text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
//             Smart Assignment Assessment Tool
//           </p>
//           <Paragraph className="mt-4">
//             Revolutionize your assessment workflow with AI-powered evaluation of student reports, code repositories, and video presentations. Save time while providing more detailed, objective feedback for your students.
//           </Paragraph>
//           <div className="flex w-full max-w-md mx-auto mt-10 lg:mx-0">
//             <div className="flex flex-col w-full gap-5 sm:flex-row">
//               <a href="#Domain">
//               <Button className="text-white min-w-max">
//                 <span className="relative z-[5]">Learn More</span>
//               </Button>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex flex-1 max-w-3xl mx-auto lg:w-1/2 lg:h-auto lg:max-w-non lg:mx-0">
//   <img
//     src={hero}
//     alt="Hero image"
//     width={2350}
//     height={2359}
//     className="object-cover lg:absolute lg:w-full lg:h-full rounded-3xl lg:max-h-non max-h-96 animate-float"
//   />
// </div>
//       </Container>
//       {/* <Numbers /> */}
//     </section>
//   );
// };

// src/components/sections/Hero.jsx
import { Button } from "../../shared/Button";
import { Container } from "../../shared/Container";
import { Paragraph } from "../../shared/Paragraph";
import hero from "/hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 overflow-hidden lg:pt-36 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-200 rounded-full -left-20 -top-20 opacity-20 animate-pulse"></div>
        <div className="absolute bg-purple-200 rounded-full -right-20 -bottom-20 w-80 h-80 opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-indigo-200 rounded-full right-1/2 bottom-1/3 w-96 h-96 opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
        <div className="relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-1 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Transform Education with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              SAAT
            </span>
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Smart Assignment Assessment Tool
          </p>
          <Paragraph className="mb-8 text-lg">
            Revolutionize your assessment workflow with AI-powered evaluation of
            student reports, code repositories, and video presentations. Save time
            while providing more detailed, objective feedback for your students.
          </Paragraph>
          <div className="flex flex-col w-full max-w-md gap-4 sm:flex-row lg:max-w-none">
            <a href="#domain">
              <Button className="w-full px-8 py-3 text-lg transition-all duration-300 shadow-lg sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                Learn More
              </Button>
            </a>
            <a href="#contact">
              <Button className="w-full px-8 py-3 text-lg text-blue-600 transition-all duration-300 bg-white border border-blue-600 shadow-lg sm:w-auto hover:bg-blue-50 hover:shadow-xl">
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:w-1/2">
          <div className="relative w-full max-w-xl">
            <img
              src={hero}
              alt="Hero image"
              className="w-full h-auto animate-float"
            />
            <div className="absolute w-full h-full bg-blue-400 -z-10 rounded-2xl top-4 left-4 opacity-20"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};