import React from "react";
import openToWork from "../assets/img/openToWork.svg";
import "../index.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import baixarCV from "../components/downloadCV.jsx";

function Header() {
  gsap.registerPlugin(SplitText);

  let split = SplitText.create(".text", {
    type: "words, lines",
  });

  useEffect(() => {
    let split = SplitText.create(".text", {
      type: "words, lines",
    });

    gsap.from(split.lines, {
      duration: 0.8,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <header className="h-[200vh] mb-[-100vh] relative">
      <div className="flex w-full min-h-screen p-6 sticky">
        <div className="bg-white rounded-2xl flex flex-col justify-between w-full px-8 py-6 lg:p-20">
          <div className="flex justify-between gap-2">
            <div>
              <h1 className="text-royalBlue  text-4xl lg:text-8xl sm:text-4xl md:text-6xl uppercase font-instrument italic font-medium">
                <span class="text">software</span>
              </h1>
              <h1 className="text-royalBlue text-4xl lg:text-8xl sm:text-4xl md:text-6xl uppercase font-instrument italic font-medium">
                <span class="text">developer</span>
              </h1>
            </div>

            <div>
              <img class="circle" src={openToWork} />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="lg:flex gap-7">
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <a className="cursor-pointer font-satoshi" href="#about">
                  <span class="text">About</span>
                </a>
              </ul>
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <a className="cursor-pointer font-satoshi" href="#projects">
                  <span class="text">Projects</span>
                </a>
              </ul>
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <a className="cursor-pointer font-satoshi" href="#contact">
                  <span class="text">Contact</span>
                </a>
              </ul>
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <a className="cursor-pointer font-satoshi">
                  <button onClick={baixarCV}>
                    <span class="text">Download resume</span>
                  </button>
                </a>
              </ul>
            </div>

            <div>
              <h1 className="text-royalBlue  text-4xl lg:text-8xl uppercase font-medium font-instrument italic">
                <span class="text">Angelo</span>
              </h1>
              <h1 className="text-royalBlue  text-4xl lg:text-8xl uppercase font-medium font-instrument italic">
                <span class="text">Mendes</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
