/* eslint-disable react/prop-types */

const ExprienceCart = ({ title, result, des }) => {
  return (
    <div>
      <div className="w-full h-1/3 group flex ">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative ">
          <span className=" absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 ">
            <span className=" w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
        <div className="md:p-10 p-5   w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne">
          <div className=" w-full flex justify-between items-center ">
            <div className="w-full flex justify-start items-center">
              <h3 className="text-8xl  font-semibold group-hover:text-white duration-300">
                {title} <span className="text-6xl">+</span>
              </h3>

              <p className=" md:hidden mt-3 w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            </div>
            <div className="md:flex hidden">
              <p className=" w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            </div>
          </div>
          <p className=" md:text-base text-sm md:font-medium  text-gray-400 group-hover:to-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExprienceCart;
