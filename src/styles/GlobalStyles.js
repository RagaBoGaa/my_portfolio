import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --primaryBg: #fffffe;
    
    --primaryClr: #0f0e17;
    --secondaryClr: #2e2f3e;

    --highlightClr: #f25f4c;
    --highlightClr-light: #ff572263;
    --hover: #f25f4c;

    --primaryFont: 'Open Sans';
    --secondaryFont: 'sans-serif';

    --container: 117rem;
}

[data-theme="dark"] {
    --primaryBg: #0f0e17f0;

    --primaryClr: #fffffe;
    --secondaryClr: #a7a9be;
}

body {
  background-color: var(--primaryBg);
  color:var(--primaryClr);
  font-family: var(--primaryFont), sans-serif;
  font-weight: 300;
  line-height: 1.4;
}

.no-scroll {
  overflow: hidden;
}

/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 5px; 
}

::-webkit-scrollbar-thumb {
  background: var(--highlightClr); 
  border-radius: 4px; 
}
`;

export const variations = {
  column: css`
    display: flex;
    flex-direction: column;
  `,
  preview: css`
    padding: 9px 22px;
    border: 1.5px solid var(--secondaryClr);

    &:hover {
      background-color: var(--highlightClr);
      border: 1.5px solid var(--highlightClr);
      color: #fff;
    }
  `,

  download: css`
    font-size: 0.85rem;
    color: #fff;
    padding: 0.57rem 1rem;
    background-color: var(--highlightClr);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translateY(30px);
    transition: transform 0.3s ease-out;

    &:hover {
      transform: translateY(25px);
    }
  `,

  contact: css`
    font-size: 0.85rem;
    color: #fffffe;
    background-color: var(--highlightClr);
    padding: 5px 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;

    @media (max-width: 767px) {
      display: none;
    }
  `,
  send: css`
    padding: 10px 20px;
    background-color: var(--highlightClr);
    color: #fff;
    font-size: 0.75rem;
    letter-spacing: 0;
  `,
};

export const Container = styled.div`
  max-width: var(--container);
  padding-inline: 5rem;
  margin-inline: auto;
  @media (max-width: 767px) {
    padding-inline: 1rem;
  }
  @media (min-width: 1024px) {
    padding-inline: 10rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 426px) {
    ${(props) => variations[props.variation]};
    align-items: unset;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  position: relative;
  padding-block: 2.5rem;
  overflow: hidden;
`;

export const MainHeading = styled.h2`
  position: relative;
  width: fit-content;
  margin-inline: auto;
  margin-block-end: 1rem;
  color: var(--highlightClr);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3.5px;
    bottom: -5px;
    border-radius: 5px;
    left: 0;
    background: linear-gradient(
      45deg,
      var(--highlightClr) 50%,
      var(--highlightClr-light) 50%
    );
  }
`;

export const SubHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-block-end: 1rem;
`;

export const P = styled.p`
  padding-block-start: 0.4rem;
`;

export const Highlight = styled.span`
  position: relative;
  padding: 2px 8px;
  color: #fff !important;
  font-weight: 500;
  font-style: italic;
  display: inline-block;
  margin: 2px 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--highlightClr);
    transform: rotate(-2deg);
    z-index: -1;
  }
`;

export const CTA = styled.button`
  font-weight: 600;
  font-size: 0.65rem;
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out,
    border 0.35s ease-out;
  cursor: pointer;

  ${(props) => variations[props.variation]}

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
`;

export default GlobalStyles;
