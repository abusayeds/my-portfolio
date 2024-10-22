// import { useState } from "react";

import { Link } from "react-scroll";
import { scrollRoute } from "../../constants";

const HomeScrollRoute = () => {
  //   const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className=" items-center  ">
        <ul className="flex items-center gap-3 md:gap-5 ">
          {scrollRoute.map((item) => (
            <ul
              className="md:text-base text-xs font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={item._id}
            >
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </ul>
          ))}
        </ul>
      </div>
      {/* <div
        className={`fixed top-20 right-0 w-screen h-screen bg-bodyColor p-8 md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <ul className="flex flex-col items-center gap-10">
          {scrollRoute.map((item) => (
            <li
              className="text-base font-sans text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={item._id}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default HomeScrollRoute;
