import { AnimationOnScroll } from "react-animation-on-scroll";
import {useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function Skills() {
  const {skills} = useContext(NavContext)
  return (
    // <section className="main-skills-container">
    <section className="skills" ref={skills}>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <container className="skills-title">
          <h2 className="header-class">
            {"<"}Skills{">"}
          </h2>
        </container>
        <h3 className="skills-text">{"{"}Frontend Development ; Backend Development{"}"}</h3>
        <br />
        <br />
        <container className="skills-general">
          <container className="img-react-container">
            <img className="react-img" src="undraw_React_re_g3ui.png"></img>
          </container>
        </container>
        <br />
        <container className="skills-container">
          <container className="skill">
            JavaScript
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                width="36"
                height="36"
                alt="JavaScript"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            HTML-5
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                width="36"
                height="36"
                alt="HTML5"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            CSS-3
            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                width="36"
                height="36"
                alt="CSS"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            React
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                width="36"
                height="36"
                alt="ReactJS"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            MongoDB
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                width="36"
                height="36"
                alt="MongoDB"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            Firebase
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                width="36"
                height="36"
                alt="Firebase"
              />
            </a>
          </container>
          <br />
          <container className="skill">
            Express
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <img
              src="express-colored948.jpg"
              width="36"
              height="36"
              alt="Express"
            />
            </a>
          </container>
          <br />
          <container className="skill">
            Node
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <img src="node.png" width="36" height="36" alt="Node" />
            </a>
          </container>
        </container>
      </AnimationOnScroll>
    </section>
  );
}
