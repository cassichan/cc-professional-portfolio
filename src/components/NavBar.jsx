import { useContext } from "react";
import "../App.css";
import { NavContext } from "../context/NavContext";

export default function NavBar() {
  const { skills, education, experience, projects, contact } =
    useContext(NavContext);

  const scrollToSection = (elementRef) => {
    const rect = elementRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementTop = rect.top + scrollTop - 80;

    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <div className="nav-container"> */}
      <section className="nav-container">
        <header className="header-text">
          <b>
            {"<"}Cassandra's Portfolio{">"}
          </b>
        </header>
        <ul className="nav-link-container">
          <li onClick={() => scrollToSection(skills)} className="nav-link">
            Skills
          </li>
          <li onClick={() => scrollToSection(education)} className="nav-link">
            Education
          </li>
          <li onClick={() => scrollToSection(experience)} className="nav-link">
            Experience
          </li>
          <li onClick={() => scrollToSection(projects)} className="nav-link">
            Projects
          </li>
          <li onClick={() => scrollToSection(contact)} className="nav-link">
            Contact Me
          </li>
        </ul>
      {/* </div> */}
      </section>
    </>
  );
}
