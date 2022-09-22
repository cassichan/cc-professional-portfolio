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
import "../App.css";

export default function NavBar() {
  return (
    <>
      <section className="nav-container">
        <header className="header-text">
          Cassandra's Portfolio
        </header>
        {/* <container className="social-container">
          <a
            href="https://github.com/cassichan"
            target="_blank"
            rel="noreferrer"
          >
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
        </container> */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </section>
    </>
  );
}
