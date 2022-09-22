import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
  return (
    <section className="project-container">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <container className="project-title">
          <h2 className="header-class">{"<"}Projects{">"}</h2>
        </container>
        <ul className="project-list hidden">
          <li className="project-list-item">
            <article className="project-section">
              <h3 className="project-title">"Chance 4 Pets"</h3>
              <h4 className="project-description">
                A full-stack web application that allows users to view animals
                available for adoption from several local animal rescues, post
                information and images for an animal in need of shelter intake,
                and implemented security with JSON web token that allows users
                to create an account, log in and favorite animals. Front end
                development using React. Utilized CSS and Ant Design for clean
                styling. Back-end development using MongoDB document database.
                RESTful API with Express and Node. Hosted on Firebase Hosting
                and deployed on Google Cloud with Firebase Functions
              </h4>
              <a
                className="link"
                href="https://github.com/cassichan/animal-rescue-frontend"
              ></a>
            </article>
          </li>
          <li className="project-list-item">
            <article className="project-section">
              <h3 className="project-title">"Cassie's Calculator"</h3>A
              calculator web app using React. Styled with pure CSS and deployed
              using firebase hosting
              <h4 className="project-description"></h4>
              <a
                className="link"
                href="https://github.com/cassichan/animal-rescue-frontend"
              ></a>
            </article>
          </li>
        </ul>
      </AnimationOnScroll>
    </section>
  );
}
