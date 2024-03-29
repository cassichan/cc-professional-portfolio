import { useContext } from "react";
import { NavContext } from "../context/NavContext";
// import "../styles/contactme.css";

export default function ContactMe() {
  const { contact } = useContext(NavContext);
  return (
    <section className="contact" ref={contact}>
      <container className="contact-title">
        <h2 className="header-class">
          {"<"}Contact me{">"}
        </h2>
      </container>
      <section className="social-container">
        <container className="button">
          <container className="icon">
            <i class="fab fa-linkedin-f"></i>
            <a
              href="https://www.linkedin.com/in/cassandra-l-curcio/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="/linkedinblack.png"
                alt="Linkedin logo: 'in' in white text inside of a rounded light-royal-blue square."
              ></img>
            </a>
          </container>
          <span>LinkedIn</span>
        </container>
        <container className="button">
          <container className="icon">
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/cassichan"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="GitHub-Mark-32px.png"
                alt="Github logo: the silhouette of a white cat outline with a tentactle-shaped tail inside of a black circle."
              ></img>
            </a>
          </container>
          <span>Github</span>
        </container>
        <container className="button">
          <container className="icon">
            <i className="fab fa-email"></i>
            <a href="mailto:cassandra.curcio@gmail.com">
              <img
                className="logo-img"
                src="email.png"
                alt="Icon of mail envelope"
              ></img>
            </a>
          </container>
          <span>E-mail</span>
        </container>
      </section>
      <img
        className="photo-self"
        src="self.jpeg"
        alt="Cassandra, female with dark blonde hair in blue blouse and blue jeans."
      ></img>
    </section>
  );
}
