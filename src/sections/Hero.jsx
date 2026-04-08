import React from "react";
import "../index.css";
import { HERO_CONTENT, SKILLS } from "../constants";

function Hero() {
  return (
    <>
      <div id="about" className="flex w-full min-h-screen p-6 sticky">
        <div className="bg-white rounded-2xl flex flex-col w-full p-20">
          <div className="justify-end">
            <div>
              <h1 className="text-royalBlue  text-4xl lg:text-8xl font-instrument italic font-medium">
                {HERO_CONTENT.greeting}
              </h1>
            </div>

            <div className="flex justify-end">
              <h2 className="text-royalBlue  text-2xl lg:text-5xl font-instrument italic font-medium">
                {HERO_CONTENT.title}
              </h2>
            </div>

            <div className="flex justify-end">
              <p className="w-full lg:w-137.25 text-end pt-2.5 font-satoshi">
                {HERO_CONTENT.description}
              </p>
            </div>

            <div className="flex justify-between gap-28">
              <div>
                <h2 className="text-royalBlue  text-2xl lg:text-5xl font-instrument italic font-medium">
                  Skills
                </h2>
                <div className="pt-2.5">
                  {SKILLS.map((skill, index) => (
                    <p key={index} className="font-satoshi">
                      {skill.label}: {skill.stack}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
