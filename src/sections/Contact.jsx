import { useState } from "react";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Instagram from "../assets/img/Instagram.svg";
import CallToAction from "../assets/img/call-to-action.svg";
import Globe from "../assets/img/globicon.png";
import baixarCV from "../components/downloadCV.jsx";

const handleSendEmail = () => {
  window.location.href =
    "mailto:angelo030825@gmail.com?subject=angelo.dev&body=Gostaria de entrar em contato com você!";
};

function Contact() {
  const [globeTransform, setGlobeTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
  );

  const handleGlobeMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -22;
    const rotateY = (x / rect.width - 0.5) * 22;

    setGlobeTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    );
  };

  const resetGlobeTransform = () => {
    setGlobeTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    );
  };

  return (
    <>
      <footer id="contact">
        <div className="sticky flex min-h-screen w-full p-6">
          <div className="relative flex w-full justify-center rounded-2xl bg-white px-8 py-6 lg:p-20">
            <div className="flex flex-col justify-center">
              <div className="mx-auto my-5 sm:my-16 lg:m-48">
                <div className="flex flex-col items-center justify-center gap-2 lg:gap-3.5">
                  <h1 className="text-royalBlue text-center leading-none text-5xl lg:text-9xl font-medium font-instrument italic">
                    Let's talk!
                  </h1>
                  <button
                    onClick={handleSendEmail}
                    className="bg-royalBlue cursor-pointer rounded-[20px] px-4 py-2 text-base text-white hover:bg-white hover:text-royalBlue hover:outline-2 hover:outline-royalBlue sm:text-xl lg:px-7 lg:py-2.5 lg:text-3xl font-satoshi"
                  >
                    Get in touch
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <a
                  className="cursor-pointer"
                  href="https://github.com/angelo-Cahetel"
                  target="_blank"
                >
                  <img className="w-7 h-7" src={GitHub} alt="" />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/angelocahetel/"
                  target="_blank"
                >
                  <img className="w-7 h-7" src={LinkedIn} alt="" />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://www.instagram.com/angelo_m_souza/"
                  target="_blank"
                >
                  <img className="w-7 h-7" src={Instagram} alt="" />
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
              <img
                className="mr-25 w-35 translate-y-8 sm:mr-10 sm:w-28 sm:translate-y-12 lg:mr-40 lg:w-auto lg:translate-y-25"
                src={CallToAction}
                alt=""
              />
              <button
                type="button"
                onClick={baixarCV}
                onMouseMove={handleGlobeMove}
                onMouseLeave={resetGlobeTransform}
                className="cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <img
                  src={Globe}
                  alt=""
                  className="w-45 transition-transform duration-200 ease-out will-change-transform sm:w-20 lg:w-auto"
                  style={{
                    transform: globeTransform,
                    transformStyle: "preserve-3d",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
