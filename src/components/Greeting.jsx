import { AnimationOnScroll } from "react-animation-on-scroll";
import { Divider } from "@chakra-ui/react";
import Intro from "./Intro";
// import "../styles/greeting.css"
import "../App.css";

export default function Greeting() {
  return (
    <>
      <section className="greeting-container">
        <container className="greeting-text">
          <Intro />
          <br />
          <Divider />

          <br />
          <AnimationOnScroll
            animateIn="animate__bounceIn"
            initiallyVisible="true"
          >
            <container className="greeting-details">
              <h2>
                {" "}
                I'm a passionate Full Stack software developer!
                <br />
                <br /> I am experienced in JavaScript, TypeScript, React.js, HTML, CSS, SQL,
                MongoDB, Firebase/GCP, Express, and Node.js.
                <br />
                <br />I am eager to learn many technologies and frameworks! I am currently learning Angular, NEST.js, and Nx.
              </h2>
              <br />
              <button className="resume-button">
                <a href="https://docs.google.com/document/d/1q75aTXu6E3V6SPk29yzMZdI-EADhtbb-w2YjGHRUOo8/edit">
                  {" "}
                  My Resume
                </a>
              </button>
            </container>
          </AnimationOnScroll>
        </container>
      </section>
    </>
  );
}
