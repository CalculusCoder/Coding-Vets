import React from "react";
import Button1 from "../global/Button1";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-10 h-10 text-yellow-500"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.387 7.113h7.443l-6.04 4.511 2.327 7.258-6.117-4.292-6.107 4.276 2.303-7.247-6.038-4.524h7.437z" />
  </svg>
);

const Hero = () => {
  return (
    <div>
      <div className=" mt-44 md:flex md:mt-32 md:justify-around lg:items-center xl:mt-20">
        <div className=" md:max-w-sm">
          <div>
            <div className="text-3xl pl-4 font-semibold absolute top-32 lg:top-56 xl:top-48 lg:text-4xl lg:mb-16 md:w-96 xl:w-[450px]">
              <Typewriter
                loop={false}
                words={[
                  "Learn How To Code",
                  "Transition into Tech, 100% Remotely",
                  "Learn Web Development",
                  "From HTML to CSS, Javascript, and React",
                ]}
                cursor={true}
                cursorStyle={"_"}
              />
            </div>
            <div className="text-xl p-4 pt-2 md:pt-14 xl:pt-0 2xl:w-[500px] text-slate-300">
              We help U.S veterans embark on a new journey in the tech industry,
              free of charge. Learn the skills you need to become a proficient
              web developer or software engineer.
            </div>
          </div>
          <div className="flex gap-12 justify-center mt-10 items-center">
            <Button1 buttonText="Apply" padding="p-2"></Button1>
            <div className="text-xl">
              <button>Learn More</button>
              <button className="ml-2">🚀</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 md:mt-0 w-11/12 mx-auto md:w-auto md:mx-0 ">
          <Image
            layout="intrinsic"
            className="rounded-3xl border-[1px] border-green-300 "
            alt="Landing Page Image"
            src="/images/code.jpeg"
            quality={100}
            width={900}
            height={300}
          />
        </div>
      </div>
      <div className="mt-16 p-4 text-lg">
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center w-20 md:w-64 m-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-300">
              Training
            </h2>
            {/* <p className="mt-4">
              Empowering veterans with the skills and knowledge they need to
              transition into fulfilling careers in the tech industry.
            </p> */}
          </div>
          <div className="flex items-center">
            <Star />
          </div>
          <div className="flex flex-col items-center w-30 md:w-64 m-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-300">
              Compassion
            </h2>
            {/* <p className="mt-4">
              Understanding the unique challenges faced by veterans, and
              providing a supportive and inclusive environment for learning.
            </p> */}
          </div>
          <div className="flex items-center">
            <Star />
          </div>
          <div className="flex flex-col items-center w-30 md:w-64 m-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-300">
              Honor
            </h2>
            {/* <p className="mt-4">
              Honoring the service and sacrifices of veterans by providing them
              with opportunities for growth and success in their post-military
              lives.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
