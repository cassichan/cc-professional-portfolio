export default function Projects() {
  return (

    <>
    <container className="project-container">
    <container className="project-title">
      <h2 className="header-class">Projects</h2>
      </container>
      <ul className="project-list">
        <li
        // style="opacity: 1"
        >
          <article className="project-section">
          {/* // style="transform: matrix(1, 0, 0, 1, 0, 0)"
          > */}
            <h3 className="project-title">"Chance 4 Pets"</h3>
            <h4 className="project-description">
              A full-stack web application that allows users to view animals
              available for adoption from several local animal rescues, post
              information and images for an animal in need of shelter intake,
              and implemented security with JSON web token that allows users to
              create an account, log in and favorite animals. Front end
              development using React. Utilized CSS and Ant Design for clean
              styling. Back-end development using MongoDB document database.
              RESTful API with Express and Node. Hosted on Firebase Hosting and
              deployed on Google Cloud with Firebase Functions
            </h4>
            <a
              className="link"
              href="https://github.com/cassichan/animal-rescue-frontend"
            ></a>
          </article>
          {/* <div class="reveler" style="transform: translate(-100%, 0%) matrix (1, 0, 0, 1, 0, 0)"></div> */}
        </li>
        <li
        // style="opacity: 1"
        >
          <article className="project-section"
          // style="transform: matrix(1, 0, 0, 1, 0, 0)"
          >
            <h3 className="project-title">"Cassie's Calculator"</h3>A calculator web app using React. Styled
          with pure CSS and deployed using firebase hosting
            <h4 className="project-description">
             blah
            </h4>
            <a
              className="link"
              href="https://github.com/cassichan/animal-rescue-frontend"
            ></a>
          </article>
          {/* <div class="reveler" style="transform: translate(-100%, 0%) matrix (1, 0, 0, 1, 0, 0)"></div> */}
        </li>
      </ul>



      {/* <HStack spacing={8}>
        <container>
          <h3>"Chance 4 Pets"</h3>A full-stack web application that allows users
          to view animals available for adoption from several local animal
          rescues, post information and images for an animal in need of shelter
          intake, and implemented security with JSON web token that allows users
          to create an account, log in and favorite animals. Front end
          development using React. Utilized CSS and Ant Design for clean
          styling. Back-end development using MongoDB document database. RESTful
          API with Express and Node. Hosted on Firebase Hosting and deployed on
          Google Cloud with Firebase Functions
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="teal" variant="ghost">
              Button
            </Button>
          </Stack> */}
      {/* <img src="" alt="">
          {" "}
          <a href="https://github.com/cassichan/animal-rescue-frontend"></a>
          </img>
          <img src="" alt="">
          {" "}
          <a href="https://animal-rescue-frontend-js.web.app/"></a>
        </img> */}
      {/* </container>
        <container>
          <h3>"Cassie's Calculator"</h3>A calculator web app using React. Styled
          with pure CSS and deployed using firebase hosting
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="purple" variant="ghost">
              Button
            </Button>
          </Stack>
        </container> */}
      {/* //   <img src="" alt="">
    //     {" "}
    //     <a href="https://github.com/cassichan/personal-react-calculator"></a>
    //   </img>
    //   <img src="" alt="">
    //     {" "}
    //     <a href="https://cassies-react-project-1.web.app/"></a>
  //   </img> */}
      {/* </HStack> */}
      {/* </Container> */}
    </container>
    </>
  );
}
