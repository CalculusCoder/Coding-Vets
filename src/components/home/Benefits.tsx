import React from "react";

const Benefits = () => {
  return (
    <div className="mt-16 p-4 text-lg">
      <header className="text-center text-3xl lg:text-4xl font-semibold text-slate-300">
        Benefits of Learning To Code
      </header>
      <p className="mt-6 md:max-w-md lg:max-w-3xl lg:text-center mx-auto">
        We empower you at every step of your learning and career transition.
        From the basics of coding to getting hired as a front-end developer,
        we're with you all the way.
      </p>
      <div className="grid gap-16 md:grid-cols-2 mt-10 lg:max-w-7xl lg:mx-auto lg:gap-x-28 lg:mt-16">
        <div className=" max-w-sm lg:max-w-xl mx-auto">
          <div className="text-center text-green-200">
            <span>Transferable Skills</span>
          </div>
          <p className="text-center mt-3">
            Learning to code helps in developing problem-solving skills,
            attention to detail, and logical thinking. These skills are
            transferable to many different careers and industries.
          </p>
        </div>
        <div className=" max-w-sm lg:max-w-xl mx-auto">
          <div className="text-center text-green-200">
            <span>Startup Opportunities</span>
          </div>
          <p className="text-center mt-3">
            Coding can be the first step towards launching your own startup.
            With this skill, you'll be able to create your own software or app,
            providing you the freedom to be your own boss.
          </p>
        </div>
        <div className=" max-w-sm lg:max-w-xl mx-auto">
          <div className="text-center text-green-200">
            <span>High Demand & Job Security</span>
          </div>
          <p className="text-center mt-3">
            Software development is a growing field with high demand for skilled
            developers. By learning to code, you're entering a profession with
            excellent job prospects and security.
          </p>
        </div>
        <div className=" max-w-sm lg:max-w-xl mx-auto">
          <div className="text-center text-green-200">
            <span>Competitive Salaries</span>
          </div>
          <p className="text-center mt-3">
            Jobs in the tech industry, especially those related to software
            development, are typically high-paying, providing financial
            stability for veterans and their families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
