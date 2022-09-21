// import ReactCSSTransitionGroup from 'react-transition-group';

export default function Greeting() {
  return (
    <>
      <section className="greeting-container">
        <container className="greeting-text">
          {/* <h1 className="greeting-hello">
            Hi all,
            <br /> I'm Cassandra Curcio!
          </h1> */}

          <h1 aria-label="Hi! I'm Cassandra Curcio">
            Hi! I'm <span class="typewriter"></span>
          </h1>

          <h1 aria-label="Hi! I'm a developer">
            I'm a passionate full-stack&nbsp;<span class="typewriter thick"></span>
          </h1>

          {/* <h1 aria-label="Hi! I'm Cassandra Curcio">
            Hi! I'm a &nbsp;<span class="typewriter nocaret"></span>
          </h1>  */}

          <br />
          <h2>
            {" "}
            I'm a passionate Full Stack software developer.
            <br />
            <br /> I am experienced in JavaScript, React.js, HTML, CSS, MongoDB,
            Firestore, SQL, and Express.
            <br />
            <br />I am eager to learn many technologies and frameworks!
          </h2>
          <br />
          <button className="button">
            <a href="https://docs.google.com/document/d/12S9bzpJDplJncOIERJtzG56qccdH6e1FYjuRMpLjo_s/edit">
              {" "}
              My Resume
            </a>
          </button>
        </container>
        {/* <img
          className="photo-self"
          // src="photoscreenshot.png"
          src="D2BEA143-BDAC-4F8E-BDF2-CD6B4A62736D_1_201_a.jpeg"
          alt="Photo of Cassandra, female with dark blonde hair in orange blouse and grey slacks."
        ></img> */}
      </section>
    </>
  );
}
