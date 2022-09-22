import "../App.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Education() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <section className="education-container">
        <container className="education-title">
          <h2 className="header-class">Education</h2>
        </container>
        <container>
          <ul className="education-list hidden">
            <li className="education-list-item slide-in">
              <h3 className="education-title">
                Boca Code Software Engineering Career Course Certificate
              </h3>
              <h4 className="education-description slidingText2">
                July 2022- Sep 2022{" "}
              </h4>
            </li>
            <li className="education-list-item">
              <h3 className="education-title"></h3> Nova Southeastern
              University, Master of Science in Nutrition
              <h4 className="education-description"> May 2019</h4>
            </li>
            <li className="education-list-item">
              <h3 className="education-title"></h3> Nova Southeastern
              University, Bachelor of Science in Nursing
              <h4 className="education-description"> May 2014</h4>
            </li>
          </ul>
        </container>
      </section>
    </AnimationOnScroll>
  );
}
