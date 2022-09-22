import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
  return (
    <section className="project-container">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <container className="project-title">
          <h2 className="header-class">
            {"<"}Projects{">"}
          </h2>
        </container>
        <ul className="project-list">
          <li className="project-list-item">
            <article className="project-section">
              <h3 className="project-title">"Chance 4 Pets"</h3>
              <h4 className="project-description">
                A full-stack animal-rescue web application. Front end
                development using React. Styled with CSS and Ant Design.
                Back-end development using MongoDB. RESTful API with Express and
                Node. Deployed on Google Cloud with Firebase Hosting and
                Firebase Functions
                <br />
                <br />
                <a
                  className="link"
                  href="https://animal-rescue-frontend-js.web.app/"
                >
                  Live
                </a>
                &nbsp;&nbsp;
                <a
                  className="link"
                  href="https://github.com/cassichan/animal-rescue-frontend"
                >
                  Github Repo
                </a>
              </h4>
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
              <h3 className="project-title">"Cassie's Calculator"</h3>
              <h4 className="project-description">
                A calculator web application using React. Styled with pure CSS
                and deployed using firebase hosting
                <br />
                <br />
                <a
                  className="link"
                  href="https://cassies-react-project-1.web.app/"
                >
                  Live
                </a>
                &nbsp;&nbsp;
                <a
                  className="link"
                  href="https://github.com/cassichan/personal-react-calculator"
                >
                  Github Repo
                </a>
              </h4>

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
