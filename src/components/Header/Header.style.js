import styled from "styled-components";

export const MobileMenu = styled.div`
  &.opened {
    left: 0;
    border-radius: 0 0 80% 0;
  }
  background-color: var(--secondaryClr);
  position: absolute;
  top: 48px;
  left: -4000px;
  width: 100dvw;
  height: calc(100dvh - 48px);
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgb(15, 14, 23, 0.7);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  color: #fff;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  font-variant: all-petite-caps;
`;

export const MainHeader = styled.header`
  position: sticky;
  inset: 0;
  background-color: var(--primaryBg);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 10px rgb(15, 14, 23, 0.2);
  z-index: 10;
`;

export const MyLogo = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.35s ease-in-out;
  svg {
    fill: var(--highlightClr);
    transform: rotate(180deg);
  }

  &:hover {
    color: var(--hover);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const NavList = styled.ul`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Li = styled.li`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.35s;
  margin-inline: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--hover);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.opened {
    right: 0;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 48px;
    right: 4000px;
    transition: all 0.4s ease;
  }
`;
