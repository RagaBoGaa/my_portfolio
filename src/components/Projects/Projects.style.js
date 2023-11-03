import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 1rem;
`;

export const SingleProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16),
    0px 3px 6px 0px rgba(0, 0, 0, 0.23);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StackContainer = styled.div``;

export const StackHighlight = styled.span`
  display: inline-block;
  color: #fff;
  background-color: var(--highlightClr);
  margin: 0.2rem 0.4rem 0.2rem 0;
  padding: 0.1rem 0.4rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 0.5rem;
  margin-block-end: 1rem;
`;

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-inline: 0.5rem;
  margin-block-end: 1rem;
`;
