import { images } from "../../assets/images";
import Title from "../layout/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="project"
      className="w-full h-auto md:py-20 py-10  border-b border-gray-500 "
    >
      <div className=" flex justify-center items-center text-center ">
        <Title
          title="  VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des=" My projects"
        ></Title>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectsCard
          title="Fitness"
          useTools=" Java Script, React js, Redux"
          DesignTools="Tailwind && Shadcn"
          Scode="https://github.com/abusayeds/Fitness-server"
          Fcode="https://github.com/abusayeds/Fitness-client"
          Lcode="https://fitness-client-theta.vercel.app/"
          des="Experts define physical fitness as “one's ability to execute daily activities with optimal
           performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.
              "
          img={images.fitness}
        ></ProjectsCard>
        <ProjectsCard
          title=" Food-server project"
          useTools=" Java Script, React js, mongoDB,"
          DesignTools=" CSS && Tailwind"
          Scode="https://github.com/abusayeds/food-server"
          Fcode="https://github.com/abusayeds/food-order"
          Lcode="https://food-order-react-project.netlify.app/"
          des="Food Servers work as a team with front-of-house staff to welcome customers, direct them to their seats and take their orders. They engage in friendly conversation with their
           tables to make them feel comfortable and provide a hospitable environment, delivering food on time and at the correct temperature."
          img={images.foodProject}
        ></ProjectsCard>
        <ProjectsCard
          title="Today News"
          useTools=" Java Script,"
          DesignTools=" CSS && Tailwind"
          Fcode="https://github.com/abusayeds/Today-News"
          Lcode="https://652132da47086d6249413de6--lively-tapioca-63bbba.netlify.app/"
          des="A project description outlines the details of one project, including all its phases and processes involved, in a single document.
           It addresses the problem that initiated the project and the desired goals and objectives. But it doesn't have to stop there"
          img={images.newsProject}
        ></ProjectsCard>
      </div>
    </section>
  );
};

export default Projects;
