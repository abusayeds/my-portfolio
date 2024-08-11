

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { images } from "../../assets/images";
import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

import { BsArrowBarDown, BsGithub } from "react-icons/bs";

const pdf = "http://localhost:5173/resume.pdf";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      " a Full Stack Developer.",
      " a Professional Coder.",
      " with React.js, Redux, Next.js",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const DownloadCV = async (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blonURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blonURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <section
      id="home"
      className="md:h-screen h-auto md:pb-20 pb-10  flex font-titlefont border-b border-gray-500 mt-5"
    >
      <div className="relative bg-cover bg-center w-screen h-full md:bg-[url('https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg')]">
        <div className="md:absolute md:inset-0 md:bg-black opacity-60 md:flex justify-center items-center md:px-10 min-w-full">
          <div className="w-3/2 flex flex-col md:gap-16 gap-12">
            <div className="text-white flex flex-col gap-6">
              <h4>WELCOME TO MY WORLD</h4>
              <h1 className="md:text-6xl text-3xl font-bold">
                Hi, I 'am <span className="text-designColor">Abu Sayed</span>{" "}
              </h1>
              <h2 className="md:text-4xl font-bold text-white">
                <span>{text}</span>
                <Cursor
                  cursorBlinking={false}
                  cursorStyle="|"
                  cursorColor="#ff014"
                />
              </h2>
              <h3>
                Welcome to my portfolio! I'm a passionate front-end developer
                with a keen eye for design and a love for creating user-friendly
                web experiences. Here, you'll find a showcase of my work,
                demonstrating my skills and expertise in web development.
              </h3>
            </div>

            <div className="md:flex justify-between">
              <div className=" w-1/2 flex justify-between md:justify-around md:items-center gap-4">
                <div className="flex gap-8">
                  <a
                    href="https://www.facebook.com/profile.php?id=100074503997052"
                    target="blank"
                  >
                    <span className="IconClass">
                      <FaFacebook />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abu-sayed96/"
                    target="_blank"
                  >
                    <span className="IconClass">
                      <FaLinkedin />
                    </span>
                  </a>
                  <a href="https://github.com/abusayeds" target="_blank">
                    <span className="IconClass">
                      <BsGithub />
                    </span>
                  </a>
                </div>
                <div className=" text-xs  md:text-base   p-2 bg-gradient-to-r  from-blue-600 to-bodyColor hover:opacity-100 opacity-85 text-white  rounded flex items-center justify-center font-titlefont gap-2">
                  <button onClick={() => setIsModalOpen(true)}>RESUME</button>
                  <BsArrowBarDown className=" animate-bounce  duration-500"></BsArrowBarDown>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden m-5 md:mt-0 w-full md:w-1/2 md:flex justify-center items-center">
            <img
              className="mr-5 md:animate-bounce-slow md:opacity-50 rounded-full max-w-full h-auto"
              src={images.mern}
              alt="MERN stack logo"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-bodyColor bg-opacity-40 z-50 flex font-titlefont justify-center items-center duration-300">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Download CV</h3>
            <p className="mt-2 font-titlefont ">
              Do you want to Download my Resume.
            </p>
            <div className="flex">
              <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-950 opacity-80 hover:opacity-100 text-white rounded flex items-center font-titlefont gap-2">
                <button
                  onClick={() => DownloadCV(pdf) && setIsModalOpen(false)}
                >
                  Download
                </button>
                <BsArrowBarDown className=" animate-bounce duration-500"></BsArrowBarDown>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 ml-8 bg-gradient-to-r from-red-400 to-red-800 opacity-80 hover:opacity-100 text-white rounded "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
