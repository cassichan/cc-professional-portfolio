import { Container } from "@chakra-ui/react";

export default function Greeting() {
  return (
    <Container>
      <container>
        <h1>Hi all, I'm Cassandra Curcio!</h1>
        <h2> I'm a passionate Full Stack software developer.</h2>
        </container>
        <container className="greeting-container">
        <h3>
          I am experienced in JavaScript, React.js, HTML, CSS, MongoDB,
          Firestore, SQL, and Express.
        </h3>
        <img
          src="photoscreenshot.png"
          alt="Photo of Cassandra, female with dark blonde hair in orange blouse and grey slacks."
        ></img>
      </container>
      <container>
        <container>
          <a href="https://docs.google.com/document/d/12S9bzpJDplJncOIERJtzG56qccdH6e1FYjuRMpLjo_s/edit">
            {" "}
            Resume
          </a>
        </container>
      </container>
    </Container>
  );
}
