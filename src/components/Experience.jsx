import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Experience() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <section className="experience-container">
        <container className="experience-title">
          <h2 className="header-class">{"<"}Experience{">"}</h2>
        </container>
        <ul className="experience-list hidden">
          <li className="experience-list-item">
            <h3 className="experience-title"></h3>"Full-stack software engineer
            candidate"
            <h4 className="experience-description">July 2022 – Sep 2022 </h4>
            <h5>
              Earned certificate upon completion of full-time intensive boot
              camp at Boca Code
            </h5>
            <img
              className="bocacode-img"
              src="https://pbs.twimg.com/profile_images/1273306124863889409/MAgy1kHL_400x400.jpg"
              alt="logo for bocacode, the letters bc in white over a bright pink background."
            ></img>
          </li>
        </ul>
      </section>
    </AnimationOnScroll>
  );
}
