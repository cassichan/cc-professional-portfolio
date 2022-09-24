import Intro from "./Intro";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import "../styles/greeting.css"
import "../App.css";
import { Divider } from "@chakra-ui/react";

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
                <br /> I am experienced in JavaScript, React.js, HTML, CSS,
                MongoDB, Firestore, SQL, and Express.
                <br />
                <br />I am eager to learn many technologies and frameworks!
              </h2>
              <br />
              <button className="resume-button">
                <a href="https://docs.google.com/document/d/12S9bzpJDplJncOIERJtzG56qccdH6e1FYjuRMpLjo_s/edit">
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
