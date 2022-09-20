export default function NavBar() {
  return (
    <>
      <container className="social-container">
        <a href="https://github.com/cassichan" target="_blank" rel="noreferrer">
          <img
            className="logo-img"
            src="/GitHub-Mark-32px.png"
            alt="Github logo: the silhouette of a white cat outline with a tentactle-shaped tail inside of a black circle."
          ></img>
        </a>
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
    </>
  );
}
