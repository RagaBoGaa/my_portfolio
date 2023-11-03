import styled from "styled-components";
import { FbIcon, GitIcon, LinkedInIcon, WhatsappIcon } from "../../icons";

const Social = () => {
  return (
    <SocialIcons>
      <FbIcon />
      <LinkedInIcon />
      <GitIcon />
      <WhatsappIcon />
    </SocialIcons>
  );
};
export default Social;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-block-start: 3rem;
`;

export const SocialIcon = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 8px;
  border-radius: 50%;
  svg {
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--highlightClr);
    }
  }
`;
