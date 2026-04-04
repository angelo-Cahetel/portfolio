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
  return (
    <>
      <footer id="contact">
        <div className="flex w-[full] min-h-screen p-6 sticky">
          <div className="flex justify-center bg-white rounded-2xl w-full p-20">
            <div className="flex flex-col justify-center">
              <div className="m-48 lg:m-50 gap-2.5">
                <div className="flex flex-col justify-center items-center gap-3.5 lg:gap-0">
                  <h1 className="text-royalBlue  text-6xl lg:text-9xl font-medium font-instrument italic whitespace-nowrap">
                    Let's talk!
                  </h1>
                  <button
                    onClick={handleSendEmail}
                    className="p-2 lg:px-7 lg:py-2.5 bg-royalBlue  hover:text-royalBlue  hover:bg-white hover:outline-2 hover:outline-royalBlue  rounded-[20px] text-white lg:text-3xl text-xl cursor-pointer font-satoshi"
                  >
                    Get in touch
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
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
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
              <img className="mr-40 translate-y-25" src={CallToAction} alt="" />
              <button type="button" onClick={baixarCV}>
                <img src={Globe} alt="" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
