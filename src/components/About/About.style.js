import styled from "styled-components";

export const AboutMe = styled.div`
  max-width: 860px;
  margin-inline: auto;
  font-weight: 400;
`;

export const Skills = styled.div`
  margin-block-start: 3rem;
`;

export const SkillHead = styled.h3`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.9;
`;

export const Stacks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-flow: wrap;
  max-width: 768px;
  margin: 12px auto;
`;

export const BoldText = styled.span`
  font-weight: 600;
  font-style: italic;
`;

export const Link = styled.a`
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
`;
