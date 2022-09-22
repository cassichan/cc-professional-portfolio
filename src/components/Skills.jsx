import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Skills() {
  return (
    <section className="main-skills-container">
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
              <svg
                className="express-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
              </svg>
              {/* <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
              width="36"
              height="36"
              alt="Express"
            /> */}
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
