/* eslint-disable react/prop-types */

import { useState } from "react";

const ProjectsCard = ({ title,  technology, des, Scode, Fcode, Lcode, backend, img }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  const handleToggleDes = () => {
    setShowFullDes(!showFullDes);
  };
  const truncatedDes = des.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <main>
      <section
        className="w-full  md:p-4  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r 
         from-bodyColor to-[#070707] group hover:bg-gradient-to-b hover:from-black hover:to-gray-800 transition-colors duration-500 relative"
      >
        <div className="w-full h-[90%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-125 duration-300 cursor-pointer"
            src={img}
            alt=""
          />
        </div>

         <div className="w-full p-4 md:p-0 my-5 flex flex-col gap-2  h-40 overflow-auto  custom-scrollbar ">
          <div className="md:flex items-center justify-between ">
            <h3 className="  text-designColor font-serif font-normal text-1xl">
              {title}
            </h3>
            <div className="flex gap-3 md:mt-0 mt-4">
              <a
                href= {Lcode}
                target="blank"
                className=" text-xs underline"
              >
                Live Link
              </a>
              <a
                href= {Fcode}
                target="blank"
                className=" text-xs underline"
              >
                    Client code
              </a>
              {Scode && (
                <a
                  href={Scode}
                  target="blank"
                  className=" text-xs underline"
                >
              
                  Server code
                </a>
              )}
             
            </div>
          </div>
          <p className=" font-titlefont text-sm  text-gray-50">Technology : <small>{technology}</small></p>
          <p className=" font-titlefont text-sm  text-gray-50">Backend: <small>{backend}</small> </p>
          <p className=" font-titlefont text-sm  text-gray-50">
            Details :{" "}
            <small className="text-sm font-titlefont text-gray-200 tracking-wide mt-3 font-normal hover:text-gray-200 duration-300">
              {showFullDes ? des : truncatedDes}
              <button
                onClick={() => handleToggleDes()}
                className="text-blue-200 underline mt-2 font-titlefont"
              >
                {showFullDes ? "See Less" : "See More"}
              </button>
            </small>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProjectsCard;
