import { useState } from "react";
import { Link } from "react-scroll";
import { images } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { navlinks } from "../../constants/index.jsx";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);

  const hendelScrollColor = () => {
    if (window.scrollY >= 125) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };
  window.addEventListener("scroll", hendelScrollColor);
  return (
    <main
      className={`md:px-4 px-5 border-b shadow-shadowOne border-gray-500 h-24  sticky top-0 z-50 flex justify-between items-center font-titlefon ${
        scrollColor
          ? " bg-black border-none"
          : " bg-bodyColor transition ease-in-out delay-150 duration-500"
      } `}
    >
      <div>
        <p className=" text-2xl  font-serif font-semibold text-designColor uppercase">
          my_portfolio
        </p>
      </div>
      <div className="w-full md:hidden flex justify-end items-end">
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          icon={open ? faX : faBars}
        />
      </div>
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {navlinks.map((item) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`fixed top-20 right-0 w-screen h-screen bg-bodyColor p-8 md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navlinks.map((item) => (
            <li
              className="text-base font-sans text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={item._id}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Navber;
