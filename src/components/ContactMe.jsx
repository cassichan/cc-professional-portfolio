import "../styles/contactme.css";

export default function ContactMe() {
  return (
    <section className="contact-me">
      <container className="contact-title">
        <h2 className="header-class">
          {"<"}Contact me{">"}
        </h2>
      </container>
      <img
        className="photo-self"
        // src="photoscreenshot.png"
        src="D2BEA143-BDAC-4F8E-BDF2-CD6B4A62736D_1_201_a.jpeg"
        alt="Photo of Cassandra, female with dark blonde hair in orange blouse and grey slacks."
      ></img>

      <section class="social-container">
        <container class="button">
          <container class="icon">
            <i class="fab fa-linkedin-f"></i>
            <img
            className="logo-img"
            src="/linkedinblack.png"
            alt="Linkedin logo: 'in' in white text inside of a rounded light-royal-blue square."
          ></img>
          </container>
          <span>LinkedIn</span>
        </container>
        {/* <container class="button">
            <container class="icon">
               <i class="fab fa-twitter"></i>
            </container>
            <span>Twitter</span>
         </container> */}
        {/* <container class="button">
            <container class="icon">
               <i class="fab fa-instagram"></i>
            </container>
            <span>Instagram</span>
         </container> */}
        <container class="button">
          <container class="icon">
            <i class="fab fa-github"></i>
            <img
              className="logo-img"
              src="GitHub-Mark-32px.png"
              alt="Github logo: the silhouette of a white cat outline with a tentactle-shaped tail inside of a black circle."
            ></img>
          </container>
          <span>Github</span>
        </container>
        {/* <container class="button">
            <container class="icon">
               <i class="fab fa-youtube"></i>
            </container>
            <span>YouTube</span>
         </container> */}
      </section>

      {/* E-mail
      <a href="https://github.com/cassichan" target="_blank" rel="noreferrer">
        Github{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/cassandra-l-curcio/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a> */}
    </section>
  );
}
