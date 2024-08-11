import ExprienceCart from "./ExprienceCart";
import { motion } from "framer-motion";

const Expreience = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      <p className=" uppercase font-titlefont text-designColor mt-10">
        Expeience
      </p>
      <div className=" md:flex gap-10">
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              title="6"
              result="6++"
              des="year of exprience in web devlopment"
            ></ExprienceCart>
          </div>
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              title="40"
              result="40++"
              des="completed  projects"
            ></ExprienceCart>
          </div>
        </div>
        
        <div className="w-full">
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              title="3"
              result="3++"
              des="year of exprience programing hero course !"
            ></ExprienceCart>
          </div>
          <div className=" my-8  w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
            <ExprienceCart
              title="1 "
              result="1++"
              des=" month of exprience software company"
            ></ExprienceCart>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Expreience;
