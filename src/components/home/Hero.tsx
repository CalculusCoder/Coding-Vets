import React from "react";
import Button1 from "../global/Button1";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" mt-44 md:flex md:mt-32 md:justify-around lg:items-center">
      <div className=" md:max-w-sm">
        <div>
          <div className="text-3xl pl-4 font-semibold absolute top-32 lg:top-56 lg:text-4xl lg:mb-16 md:w-96 xl:w-[450px]">
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
            free of charge. Learn the skills you need to become a proficient web
            developer or software engineer.
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
  );
};

export default Hero;
