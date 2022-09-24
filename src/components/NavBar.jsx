import { useRef, useContext } from "react";

import {
  Stack,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import "../App.css";
import { NavContext } from "../context/NavContext";

export default function NavBar() {
  const { skills, education, experience, projects, contact } =
    useContext(NavContext);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="nav-container">
        <header className="header-text">
          <b>
            {"<"}Cassandra's Portfolio{">"}
          </b>
        </header>
        <ul className="nav-link-container">
          <li onClick={() => scrollToSection(skills)} className="nav-link">
            Skills
          </li>
          <li onClick={() => scrollToSection(education)} className="nav-link">
            Education
          </li>
          <li onClick={() => scrollToSection(experience)} className="nav-link">
            Experience
          </li>
          <li onClick={() => scrollToSection(projects)} className="nav-link">
            Projects
          </li>
          <li onClick={() => scrollToSection(contact)} className="nav-link">
            Contact Me
          </li>
        </ul>

        {/* <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<Skills />}>Skills</MenuItem>
            <MenuItem icon={<Education />}>Education</MenuItem>
            <MenuItem icon={<Experience />}>Experience</MenuItem>
            <MenuItem icon={<Projects />}>Projects</MenuItem>
            <MenuItem icon={<ContactMe />}>Contact Me</MenuItem>
          </MenuList>
        </Menu> */}
      </section>
    </>
  );
}
