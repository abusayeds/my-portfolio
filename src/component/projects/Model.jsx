/* eslint-disable react/prop-types */

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Model = ({ data, onClose }) => {
  if (!data.open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative rounded-lg md:w-96 h-96 overflow-y-auto  bg-gray-950 opacity-90">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white hover:bg-red-700 duration-300 z-50"
        >
          X
        </button>
        <section className="p-10 flex flex-col gap-8">
          <div className="rounded-lg">
            <img src={data.img} alt="Modal content" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {data.title}
              </h3>
              <div className="flex gap-4">
              {data.Scode && (
                <a href={data.Scode} target="blank" className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                  <BsGithub />
                </a>
              )}
              <a href= {data.Fcode} target="blank" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                <BsGithub />
              </a>
              <a href={data.Lcode} target="blank" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
                <FaGlobe />
              </a>
              </div>
            </div>
            <p className="  text-gray-50">
              UseTools :
              <small className="text-sm text-gray-200 tracking-wide font-titlefont ">
                {data.useTools}
              </small>
            </p>
            <p className="  text-gray-50">
              DesignTools :
              <small className="text-sm text-gray-200 tracking-wide font-titlefont ">
                {data.DesignTools}
              </small>
            </p>
            <div>
              <p className="  text-gray-50">
                Description :
                <small className="text-sm text-gray-200 tracking-wide font-titlefont ">
                  {data.des}
                </small>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Model;
