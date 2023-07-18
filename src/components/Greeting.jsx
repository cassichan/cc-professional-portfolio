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
          <container className="greeting-details">
            <h2>
              {" "}
              I'm a passionate Full Stack software developer looking for new opportunities!
              <br />
              <br /> I am experienced in JavaScript, TypeScript, React.js, HTML,
              CSS, SQL, MongoDB, Firebase/GCP, Express, and Node.js.
              <br />
              <br />I am eager to learn many technologies and frameworks! I am
              currently learning Angular, NestJS, and Nx.
            </h2>
            <br />
            <button className="resume-button">
              <a href="https://docs.google.com/document/d/15GM5uc_WCekFqrclNi2-AW8xl1Y2qdjvGTno2DbRWsw/edit?usp=sharing">
                {" "}
                My Resume
              </a>
            </button>
          </container>
        </container>
      </section>
    </>
  );
}
