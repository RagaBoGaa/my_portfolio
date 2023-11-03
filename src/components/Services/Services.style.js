import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 1.2rem;
`;

export const SingleService = styled.div`
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16),
    0px 3px 5px 0px rgba(0, 0, 0, 0.23);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InfoText = styled.div`
  padding-inline: 1rem;
  margin-block: 1.5rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-block-end: 0.35rem;
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;
