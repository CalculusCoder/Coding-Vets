import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className=" text-center text-7xl mt-24 mb-10">OUR RULES</h1>

      <div className=" ml-48 mt-7 text-2xl mr-6">
        1.Respectful Communication: All participants must engage in polite,
        respectful conversation. Derogatory comments, insults, or offensive
        language will not be tolerated.
      </div>

      <div className=" ml-48 mt-7 text-2xl mr-6">
        2.Veteran-Friendly Space: As a community focused on U.S. veterans,
        respect for the service and experiences of veterans is paramount.
        Disrespectful comments about veterans or military service are not
        allowed.
      </div>

      {/* when entire div ends  */}
    </div>
  );
};

export default About;
