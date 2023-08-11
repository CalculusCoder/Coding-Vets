import React from "react";

const Cards = () => {
  return (
    <div className=" mt-20 lg:mt-24 text-lg text-slate-300">
      <header className="text-center font-semibold text-4xl mt-1 text-white">
        Coding Vets Curriculum
      </header>
      <header className="text-center mt-6 text-xl">
        Sessions: 2 Sessions Per Week(2-3 hours each){" "}
      </header>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div
          className={` bg-teal-950 mt-16 w-[370px] md:w-[500px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024] shadow-green-200 h-[520px]`}
        >
          <header className="text-center text-3xl font-semibold text-red-300">
            HTML
          </header>
          <p className="text-center mt-3 mb-4 text-white">
            Course duration: 2-3 weeks.
          </p>
          <div className="space-y-3 lg:space-y-5">
            <div className="flex items-center">
              <p className="text-3xl">💡</p>
              <p className="py-3 mt-2 text-center text-lg">
                Fundamentals of Web Development and Software Engineering
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl">🚀</p>
              <p className="py-3 mt-2 text-center text-lg">
                Getting Started With HTML. HTML Fundamentals
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl">📝</p>
              <p className="py-3 mt-2 text-center text-lg">
                HTML Hyperlinks, tags, images, forms, buttons, lists, and more.
              </p>
            </div>
          </div>
        </div>
        <div
          className={` bg-teal-950 mt-16 w-[370px] md:w-[500px]  rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024] shadow-green-200 h-[520px]`}
        >
          <header className="text-center text-3xl font-semibold text-blue-300">
            CSS
          </header>
          <p className="text-center mt-3 mb-4 text-white">
            Course Duration: 3-4 weeks
          </p>
          <div className="flex items-center">
            <p className="text-3xl">🎨</p>
            <p className="py-3 mt-2 text-center text-lg">
              Introduction To CSS. Styles, classes, inline CSS.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl">🖌️</p>
            <p className="py-3 mt-2 text-center text-lg">
              CSS Styles. Background colors, fonts, customization.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl">🎬</p>
            <p className="py-3 mt-2 text-center text-lg">
              CSS Animations, pseudo classes, media query's.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl">🏗️</p>
            <p className="py-3 mt-2 text-center text-lg">
              Building your own custom HTML and CSS website.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={` bg-teal-950 mt-16 w-[370px] md:w-[500px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024] shadow-green-200 h-[560px]`}
        >
          <header className="text-center text-3xl font-semibold text-yellow-200">
            Javascript
          </header>
          <p className="text-center mt-3 mb-4 text-white">
            Course duration: 4-6 weeks.
          </p>
          <div className="space-y-3 lg:space-y-5">
            <div className="flex items-center">
              <p className="text-3xl">📚</p>
              <p className="py-3 mt-2 text-center text-lg">
                Introduction to Javascript. Variables, Numbers, Strings.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl">⚙️</p>
              <p className="py-3 mt-2 text-center text-lg">
                Booleans, Functions, Objects, If-Else Statements, and more.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl">🌐</p>
              <p className="py-3 mt-2 text-center text-lg">
                Javascript and the Document Object Model. Arrays, Loops.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-3xl">🔨</p>
              <p className="py-3 mt-2 text-center text-lg">
                Putting it all together. HTML, CSS, and Javascript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
