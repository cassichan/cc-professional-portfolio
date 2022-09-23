import {useContext } from "react";
import { NavContext } from "../context/NavContext";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
  const {projects} = useContext(NavContext)
  return (
    <section className="projects" ref={projects}>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <container className="project-title">
          <h2 className="header-class">
            {"<"}Projects{">"}
          </h2>
        </container>
        <ul className="project-list">
          <li className="project-list-item">
            <article className="project-section">
              <container className="project-text">
                <h3 className="project-title">"Chance 4 Pets"</h3>
                <br />
                <h4 className="project-description">
                  A full-stack animal-rescue web application. Front end
                  development using React. Styled with CSS and Ant Design.
                  Back-end development using MongoDB. API with Express and Node.
                  Deployed on Google Cloud with Firebase Hosting and Firebase
                  Functions
                  <br />
                  <br />
                  <a
                    className="link"
                    href="https://animal-rescue-frontend-js.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="link"
                    href="https://github.com/cassichan/animal-rescue-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </h4>
              </container>
              <br />
              <iframe
                title="animal-rescue"
                className="iframe"
                src="https://animal-rescue-frontend-js.web.app/"
              ></iframe>
              <br />
            </article>
          </li>
          <li className="project-list-item">
            <article className="project-section">
              <container className="project-text">
                <h3 className="project-title">"Cassie's Calculator"</h3>
                <br />
                <h4 className="project-description">
                  A calculator web application using React. Styled with pure CSS
                  and deployed using firebase hosting
                  <br />
                  <br />
                  <a
                    className="link"
                    href="https://cassies-react-project-1.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="link"
                    href="https://github.com/cassichan/personal-react-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </h4>
              </container>
              <iframe
                title="calculator"
                className="iframe"
                src="https://cassies-react-project-1.web.app/"
              ></iframe>
              <br />
            </article>
          </li>
        </ul>
      </AnimationOnScroll>
    </section>
  );
}
