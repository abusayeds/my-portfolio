/* eslint-disable react/prop-types */

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Model from "./Model";
import { useState } from "react";

const ProjectsCard = ({ title, des, Scode, img, DesignTools, useTools,Fcode, Lcode, }) => {
  const [open, setOpen] = useState(false);
  const [showFullDes, setShowFullDes] = useState(false);
  const handleModelClose = () => {
    setOpen(false);
  };
  const handleToggleDes = () => {
    setShowFullDes(!showFullDes);
  };
  const truncatedDes = des.split(" ").slice(0, 7).join(" ") + "...";
  const data = { title, des, Scode, Fcode, Lcode, img, open, DesignTools, useTools };
  return (
    <main>
      <section>
        <Model data={data} onClose={handleModelClose}></Model>
      </section>
      <section
        className="w-full md:p-10 p-4  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r 
         from-bodyColor to-[#070707] group hover:bg-gradient-to-b hover:from-black hover:to-gray-800 transition-colors duration-500 relative"
      >
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-125 duration-300 cursor-pointer"
            src={img}
            alt=""
          />
        </div>

        <div className="w-full my-5 flex flex-col gap-6  h-32 overflow-auto ">
          <div className="flex items-center justify-between ">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-4">
              {Scode && (
                <a href="https://github.com/abusayeds/Fitness-client" target="blank" className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                  <BsGithub />
                </a>
              )}
              <a href="https://github.com/abusayeds/Fitness-server" target="blank" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                <BsGithub />
              </a>
              <a href="https://fitness-client-theta.vercel.app/" target="blank" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-50">
              Use Tools :{" "}
              <small className="text-sm font-titlefont text-gray-200 tracking-wide mt-3 font-normal hover:text-gray-200 duration-300">
                {showFullDes ? des : truncatedDes}
                <button
                  onClick={() => handleToggleDes()}
                  className="text-blue-100 underline mt-2 font-titlefont"
                >
                  {showFullDes ? "See Less" : "See More"}
                </button>
              </small>
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="absolute bottom-0 left-0 w-full py-2 bg-gradient-to-r  from-blue-800 via-purple-600 to-pink-900 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          View More
        </button>
      </section>
    </main>
  );
};

export default ProjectsCard;
