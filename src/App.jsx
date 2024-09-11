import "./App.css";
import About from "./component/about/About";
import Banner from "./component/banner/Banner";
import Contact from "./component/contact/Contact";
import Features from "./component/features/Features";
import Footer from "./component/footer/Footer";
import Navber from "./component/navber/Navber";

import Projects from "./component/projects/Projects";
import Resume from "./component/resume/Resume";

function App() {
  return (
    <section>
      <main className=" w-auto h-auto bg-bodyColor text-lightText md:px-16 px-0">
        <Navber></Navber>
        <div className="md:px-0 px-5 ">
          <Banner></Banner>
          <Projects></Projects>
          <Features></Features>
          <Resume></Resume>
          <About></About>
          <Contact></Contact>
        </div>
      </main>
      <Footer></Footer>
    </section>
  );
}

export default App;
