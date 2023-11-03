import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.4;
  color: var(--primaryClr);
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const Tags = styled.span`
  color: var(--primaryClr);
  font-weight: 600;
  font-style: italic;
`;

export const Stack = styled.span`
  color: var(--secondaryClr);
  font-weight: 400;
  font-size: 1.1rem;
`;

export const Name = styled.span`
  color: var(--highlightClr);
  font-weight: 600;
`;

export const LeftSide = styled.div`
  flex-basis: 50%;
  @media (max-width: 426px) {
    flex-basis: 100%;
  }
`;
export const RightSide = styled.div`
  max-width: 375px;
  flex-basis: 40%;
  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-flow: wrap;
`;

export const HeroBgImg = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
