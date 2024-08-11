import SkillaInline from "./SkillaInline";
import SkillProgress from "./SkillProgress";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div className=" md:flex gap-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      <div className="md:w-1/2">
        <div className=" flex flex-col gap-2 mt-16 font-titlefont">
          <p className=" text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className=" font-semibold">Design Skill</h2>
        </div>
        <div className=" my-8  ">
          <SkillaInline skill="Bootstrap" percentage={80}></SkillaInline>
          <SkillaInline skill="Tailwind CSS" percentage={85}></SkillaInline>
          <SkillaInline skill="ant-desing" percentage={75}></SkillaInline>
          <SkillaInline skill="shadcn" percentage={60}></SkillaInline>
          <SkillaInline skill="daisy-ui" percentage={95}></SkillaInline>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className=" flex flex-col gap-2 mt-16 font-titlefont">
          <p className=" text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className=" font-semibold">Devlopment Skill</h2>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <SkillProgress skill="Java Script" percentage={75}></SkillProgress>
          <SkillProgress skill="Type Script " percentage={70}></SkillProgress>
          <SkillProgress skill="React js" percentage={85}></SkillProgress>
          <SkillProgress skill="Next js" percentage={65}></SkillProgress>
          <SkillProgress skill="Redux" percentage={75}></SkillProgress>
          <SkillProgress skill="MongoDB" percentage={80}></SkillProgress>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
