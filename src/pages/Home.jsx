import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <NavBar />
      <br />
      <Divider/>
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
      {/* <GithubProfile/> */}
    </>
  );
}
