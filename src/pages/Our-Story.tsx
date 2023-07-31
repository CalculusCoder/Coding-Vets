import React from "react";
import Image from "next/image";
import Layout from "@/components/global/Layout";

const About = () => {
  return (
    <Layout>
      <div>
        {/* this code allows change of font size. */}
        <div className="mt-10">
          <h1 className="text-center text-2xl">About Coding-Vets.IO</h1>
          <div className="   mt-8 text-center  max-w-5xl mx-auto">
            We at Coding-Vets.IO would like to extend our deepest gratitude to
            each service member who has served our nation. We admire your
            bravery, dedication, and the sacrifices you've made. Your potential,
            shaped by your service and unique experiences, is significant and
            undeniable. With this in mind, we are thrilled to offer our US
            Veterans an exclusive opportunity to further your skills in the
            in-demand technology sector. Over the last 20 years, we've seen
            breathtaking technological advancements that have transformed our
            lives and the world at large, from smartphones and social media to
            cloud computing, AI, Machine Learning, and blockchain technologies.
            As these technological frontiers continue to expand, the need for
            skilled professionals who can navigate and innovate within these
            areas grows. At Coding-Vets.IO, we're committed to equipping you
            with the necessary tools, training, and knowledge to meet this
            demand. Looking forward to the next 20 years, we envision a future
            molded by developments in quantum computing, AI, biotechnology,
            augmented and virtual reality, renewable energy technologies, and
            more. You, as veterans, have demonstrated a unique ability to learn
            quickly, adapt, and tackle complex challenges, making you ideally
            suited to excel in the tech industry. Coding-Vets.IO is here to
            support you throughout your transition into this exciting new career
            path. In conclusion, we would like to express our profound gratitude
            for your service once again. We look forward to helping you unlock
            the vast potential the future of technology holds.
          </div>

          <div className="text-center mt-2  bg-yellow-400   p-1">
            Thank you again for your service, and welcome to the future of
            technology with Coding-Vets.IO.
          </div>
        </div>

        <div className=" text-center mt-8 max-w-10xl">
          <h1>Meet the Team below!</h1>
        </div>

        {/* Div to create Bios and have our pictures */}
        <div className=" flex justify-around">
          {/* Sub div for Sean Bio */}
          <div className=" max-w-md">
            <div className=" ml-28">
              <Image
                src="/images/Sean_laugh.gif"
                alt="Animation"
                width={479}
                height={498}
              />
            </div>

            <div className="">
              Hello US Veterans, my name is Sean Ordonez. I am a FIU student who
              is passionate about coding. I'll get straight to it. Me and my
              friend Jared Gomez were one day talking about how US troops do not
              have enough options once their time is served in the military and
              especially knowing the fact of how US troops are treated once they
              are back home. We wanted to do something from the bottom of our
              hearts. We want to help our Veterans access our website and utlize
              the knowlege and principle of programming for a chance in the
              technology sector.
            </div>
          </div>

          <div>
            <div className=" ml-44">picture jrod</div>

            <div className="">Hello US Veterans, my name is Jared Gomez...</div>
          </div>
        </div>
        {/* end of div meaning end of ERRthang  */}
      </div>
    </Layout>
  );
};

export default About;
