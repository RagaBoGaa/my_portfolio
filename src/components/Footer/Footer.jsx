import styled from "styled-components";
import { Container, P } from "../../styles/GlobalStyles";
import Social from "../../utils/Social/Social";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInfo>
          <Social />
          <P>
            &copy; {new Date().getFullYear()} <span>Ragab.</span> All rights
            reserved.
          </P>
        </FooterInfo>
      </Container>
    </StyledFooter>
  );
};
export default Footer;

export const StyledFooter = styled.footer`
  background-color: var(--primaryBg);
  box-shadow: 0 0 10px rgb(15, 14, 23, 0.2);
`;

export const FooterInfo = styled.div`
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    font-weight: 600;

    span {
      color: var(--highlightClr);
      font-weight: 700;
    }
  }
`;
