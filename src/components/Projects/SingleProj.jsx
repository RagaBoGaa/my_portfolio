/* eslint-disable react/prop-types */
import { CTA, Highlight } from "../../styles/GlobalStyles";
import {
  BtnsContainer,
  Info,
  SingleProject,
  StackContainer,
  StackHighlight,
} from "./Projects.style";

import { GithubIcon, LinkIcon } from "../../icons";

const SingleProj = ({ image, name, description, stack, linkDemo, source }) => {
  return (
    <SingleProject key={name}>
      <img src={image} alt={name} style={{ aspectRatio: "16/9" }} />
      <Info>
        <h2
          style={{
            textAlign: "center",
            marginBlockStart: "5px",
            marginBlockEnd: "10px",
            fontSize: "1.2rem",
          }}
        >
          <Highlight>{name}</Highlight>
        </h2>
        <p>{description}</p>
        <StackContainer>
          {stack.map((tech) => (
            <StackHighlight key={tech}>{tech}</StackHighlight>
          ))}
        </StackContainer>
      </Info>
      <BtnsContainer>
        <CTA variation="preview">
          <a href={linkDemo} target="_blank" rel="noopener noreferrer">
            <LinkIcon /> Demo
          </a>
        </CTA>
        <CTA variation="preview">
          <a href={source} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> Code
          </a>
        </CTA>
      </BtnsContainer>
    </SingleProject>
  );
};
export default SingleProj;
