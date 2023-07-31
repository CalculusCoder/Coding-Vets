import React from "react";
import Button1 from "../global/Button1";

const CallToAction = () => {
  return (
    <div className=" mt-32">
      <header className="text-4xl font-semibold text-center">
        Start Your Learning Journey Today!
      </header>
      <p className="text-center text-lg mt-6 max-w-sm lg:max-w-md mx-auto">
        Seize the opportunity - Apply today and become a part of our online
        Coding Vets Curriculum!
      </p>
      <div className="flex gap-12 justify-center mt-10 items-center">
        <Button1 buttonText="Join Now" padding="p-2" />
        <div className="text-xl">
          <button>Course Info</button>
          <button className="ml-2">📚</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
