import { useEffect, useState } from "react";

import { MainHeader } from "./Header.style";
import { Container, Row } from "../../styles/GlobalStyles";

import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the 'no-scroll' class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <MainHeader>
      <Container>
        <Row>
          <Logo />
          <Navbar isOpen={isOpen} setOpen={setOpen} />
        </Row>
      </Container>
    </MainHeader>
  );
};
export default Header;
