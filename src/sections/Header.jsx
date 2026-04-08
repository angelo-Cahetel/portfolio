import React from "react";
import openToWork from "../assets/img/openToWork.svg";
import "../index.css";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

function Header() {
  gsap.registerPlugin(SplitText);

  const handleNavigate = (target) => () => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(target, true, "top top");
      return;
    }

    if (target === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

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
                <button
                  type="button"
                  onClick={handleNavigate("#about")}
                  className="cursor-pointer font-satoshi"
                >
                  <span class="text">About</span>
                </button>
              </ul>
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <button
                  type="button"
                  onClick={handleNavigate("#projects")}
                  className="cursor-pointer font-satoshi"
                >
                  <span class="text">Projects</span>
                </button>
              </ul>
              <ul className="text-[16px] lg:text-2xl text-royalBlue  hover:underline transition-all">
                <button
                  type="button"
                  onClick={handleNavigate("#contact")}
                  className="cursor-pointer font-satoshi"
                >
                  <span class="text">Contact</span>
                </button>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleNavigate(0)}
              className="text-left cursor-pointer"
            >
              <h1 className="text-royalBlue  text-4xl lg:text-8xl uppercase font-medium font-instrument italic">
                <span class="text">Angelo</span>
              </h1>
              <h1 className="text-royalBlue  text-4xl lg:text-8xl uppercase font-medium font-instrument italic">
                <span class="text">Mendes</span>
              </h1>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
