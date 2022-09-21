import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      {/* <div className="nav-container"> */}
        <NavBar />
        <br />
        <Divider />
      {/* </div> */}
      <div className="home-content">
        <Greeting />
        <Divider />
        <br />
        <Skills />
        <Divider />
        <br />
        <Education />
        <Divider />
        <br />
        <Experience />
        <Divider />
        <br />
        <Projects />
        <Divider />
       <Footer/>
      </div>
    </>
  );
}
