import { Divider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <>
        <NavBar />
        <br />
        <Divider />
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
        <ContactMe/>
        <Divider />
      </div>
    </>
  );
}
