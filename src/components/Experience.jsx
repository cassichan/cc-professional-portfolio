import { useContext } from "react";
import { NavContext } from "../context/NavContext";
// import "../styles/experience.css"

export default function Experience() {
  const { experience } = useContext(NavContext);
  return (
    <section className="experience" ref={experience}>
      <container className="experience-title">
        <h2 className="header-class">
          {"<"}Experience{">"}
        </h2>
      </container>
      <ul className="experience-list">
        <li className="experience-list-item">
          <h3 className="experience-title">
            <i>
              "Director of Project Management, Software Engineer, Assistant Instructor, Internship Coordinator"
            </i>
          </h3>
          <h4 className="experience-description">Sep 2022 – May 2023 </h4>
          <img
            className="bocacode-img"
            src="https://pbs.twimg.com/profile_images/1273306124863889409/MAgy1kHL_400x400.jpg"
            alt="logo for bocacode, the letters bc in white over a bright pink background."
          ></img>
        </li>
      </ul>
    </section>
  );
}
