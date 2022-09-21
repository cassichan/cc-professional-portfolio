export default function Greeting() {
  return (
    <>

      <container className="greeting-container">
        <container className="greeting-text">
          <h1>Hi all, I'm Cassandra Curcio!</h1><br/>
          <h2>
            {" "}
            I'm a passionate Full Stack software developer.<br/><br/> I am experienced in
            JavaScript, React.js, HTML, CSS, MongoDB, Firestore, SQL, and
            Express.<br/>
            
          </h2><br/>
          <button className="button"><a href="https://docs.google.com/document/d/12S9bzpJDplJncOIERJtzG56qccdH6e1FYjuRMpLjo_s/edit">
            {" "}
            My Resume
          </a></button>
        </container>
        <img
          src="photoscreenshot.png"
          alt="Photo of Cassandra, female with dark blonde hair in orange blouse and grey slacks."
        ></img>
      </container>
    </>
  );
}
