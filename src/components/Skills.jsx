import { useContext } from "react";
import { NavContext } from "../context/NavContext";
// import "../styles/skills.css"

export default function Skills() {
  const { skills } = useContext(NavContext);
  return (
    <section className="skills" ref={skills}>
      <container className="skills-title">
        <h2 className="header-class">
          {"<"}Skills{">"}
        </h2>
      </container>
      <h3 className="skills-text">
        {"{"}Frontend Development ; Backend Development{"}"}
      </h3>
      <br />
      <br />
      <container className="skills-general">
        <container className="img-react-container">
          <img
            className="react-img"
            src="undraw_React_re_g3ui.png"
            alt="React"
          ></img>
        </container>
      </container>
      <br />
      <container className="skills-container">
        <container className="skill">
          <p>JavaScript</p>
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
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p>TypeScript</p>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="36"
              height="36"
              alt="TypeScript"
              className="skill-img"
            />
          </a>
        </container>
        <container className="skill">
          <p>HTML-5</p>
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
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p>CSS-3</p>
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
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p> React </p>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              width="36"
              height="36"
              alt="ReactJS"
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p> MongoDB </p>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              width="36"
              height="36"
              alt="MongoDB"
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p> Firebase </p>
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
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p>PostGreSQL</p>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              width="36"
              height="36"
              alt="PostgreSQL"
              className="skill-img"
            />
          </a>
        </container>
        <container className="skill">
          <p>Express</p>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              src="express-colored948.jpg"
              width="36"
              height="36"
              alt="Express"
              className="skill-img"
            />
          </a>
        </container>
        <br />
        <container className="skill">
          <p>Node</p>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              src="node.png"
              width="36"
              height="36"
              alt="NodeJS"
              className="skill-img"
            />
          </a>
        </container>
      </container>
    </section>
  );
}
