import { useEffect, useState } from "react";

import Hamburger from "hamburger-react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

import { CTA } from "../../styles/GlobalStyles";
import {
  DarkModeContainer,
  HamburgerMenu,
  Li,
  NavList,
  NavbarContainer,
} from "./Header.style";

import MobilesMenu from "./MobilesMenu";

const navLinks = ["about", "services", "projects"];

// eslint-disable-next-line react/prop-types
const Navbar = ({ isOpen, setOpen }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === "dark");

  useEffect(() => {
    if (storedDarkMode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [storedDarkMode]);

  function handleDarkModeToggle() {
    const updatedDarkMode = !isDarkMode;
    document.documentElement.setAttribute(
      "data-theme",
      updatedDarkMode ? "dark" : ""
    );
    setIsDarkMode(updatedDarkMode);
    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", updatedDarkMode ? "dark" : "");
  }

  return (
    <NavbarContainer>
      <NavList>
        {navLinks.map((li) => (
          <Li key={li}>
            <a href={`#${li}`}>{li}</a>
          </Li>
        ))}
      </NavList>
      <CTA variation="contact">
        <a href="#contact">contact me</a>
      </CTA>
      <HamburgerMenu>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          direction="right"
          duration={0.5}
          rounded
          label="Show mobile menu"
        />
      </HamburgerMenu>

      <MobilesMenu isOpen={isOpen} setOpen={setOpen} navLinks={navLinks} />

      <DarkModeContainer className={isOpen ? "opened" : ""}>
        <DarkModeToggle
          onChange={handleDarkModeToggle}
          isDarkMode={isDarkMode}
          size={50}
        />
      </DarkModeContainer>
    </NavbarContainer>
  );
};
export default Navbar;
