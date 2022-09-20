import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <NavBar /><br/>
      <Greeting />
      <br />
      <Skills />
      <br />
      <Education />
      <br />
      <Experience />
      <br />
      <Projects />
      {/* <GithubProfile/> */}
    </>
  );
}
