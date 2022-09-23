import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../App.css";

export default function Education() {
  const { education } = useContext(NavContext);
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <section className="education" ref={education}>
        <container className="education-title">
          <h2 className="header-class">
            {"<"}Education{">"}
          </h2>
        </container>
        <container>
          <ul className="education-list">
            <container className="education-list-item-container">
              <li className="education-list-item">
                <h3 className="education-title">
                  Boca Code Software Engineering Career Course Certificate
                </h3>
                <h4 className="education-description">July 2022- Sep 2022 </h4>
                <br />
                <img
                  className="lordicon"
                  src="478-computer-display-gradient.gif"
                  alt="An animation of a computer monitor rotating to the right."
                ></img>
              </li>
            </container>
            <container className="education-list-item-container">
              <li className="education-list-item">
                <h3 className="education-title">
                  Nova Southeastern University
                  <br /> Master of Science in Nutrition
                </h3>
                <h4 className="education-description"> May 2019</h4>
                <br />
                <img
                  className="lordicon"
                  src=" 526-paper-bag-vegetables-gradient.gif"
                  alt="An animated icon of a bouncing paper bag with vegetables."
                ></img>
              </li>
            </container>
            <container className="education-list-item-container">
              <li className="education-list-item">
                <h3 className="education-title">
                  Nova Southeastern University
                  <br /> Bachelor of Science in Nursing
                </h3>
                <h4 className="education-description"> May 2014</h4>
                <br />
                <img
                  className="lordicon"
                  src="498-ambulance-gradient.gif"
                  alt="An animated icon of an ambulance vehicle with siren going off."
                ></img>
              </li>
            </container>
          </ul>
        </container>
      </section>
    </AnimationOnScroll>
  );
}
