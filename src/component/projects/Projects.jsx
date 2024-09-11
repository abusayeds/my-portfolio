import { images } from "../../assets/images";
import Title from "../layout/Title";
import ProjectsCard from "./ProjectsCard";
import "./project.css";
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
          title="Car wash system"
          technology="Java-Scrip , React js , Redux and Tailwind css "
          backend=" Mongodb , mongoose and Nosql database system "
          Scode="https://github.com/abusayeds/car-wash-server"
          Fcode="https://github.com/abusayeds/car-was-client"
          Lcode="https://car-was-client.vercel.app/"
          des="In this project I used custom authentication and use that  JWT  . And an admin dashboard has been created to  manage the website . All the APIs I call through the RTK query are fetch the data . Added functionality where user can update his own profile and so that they can manage order and service . And there many other functionalities"
          img={images.carProject}
        ></ProjectsCard>
        <ProjectsCard
          title="Fitness"
          technology=" Java Script, React js, Redux , Tailwind && Shadcn "
          backend=" Mongodb ,  Mongoose and Nosql Database "
          Scode="https://github.com/abusayeds/Fitness-server"
          Fcode="https://github.com/abusayeds/Fitness-client"
          Lcode="https://fitness-client-theta.vercel.app/"
          des="Experts define physical fitness as “one's ability to execute daily activities with optimal
           performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.
              "
          img={images.fitness}
        ></ProjectsCard>
        <ProjectsCard
          title=" Food-server"
          technology=" Java Script, React js, "
          backend="Express js and mongodb"
          Scode="https://github.com/abusayeds/food-server"
          Fcode="https://github.com/abusayeds/food-order"
          Lcode="https://food-order-react-project.netlify.app/"
          des="Food Servers work as a team with front-of-house staff to welcome customers, direct them to their seats and take their orders. They engage in friendly conversation with their
           tables to make them feel comfortable and provide a hospitable environment, delivering food on time and at the correct temperature."
          img={images.foodProject}
        ></ProjectsCard>
      
      </div>
    </section>
  );
};

export default Projects;
