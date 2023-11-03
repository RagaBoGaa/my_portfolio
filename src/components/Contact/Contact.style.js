import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  margin-block-end: 1.5rem;
`;

export const Input = styled.input`
  display: block;
  padding: 0.75rem;
  width: 100%;
  font-size: 0.875rem;
  border-bottom: 2px solid #e2e8f0;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 0 3px 5px rgb(0, 0, 0, 0.1);
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--highlightClr);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #e2e8f0;
  border-radius: 5px;
  background-color: transparent;
  white-space: pre;
  resize: none;
  transition: border-color 0.3s;
  box-shadow: 0 3px 5px rgb(0, 0, 0, 0.1);
  &:focus {
    border-bottom: 2px solid var(--highlightClr);
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 0;
  padding-inline: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  transform-origin: 0;
  transition: top 0.3s ease-out, transform 0.3s ease-out;
  pointer-events: none;
  z-index: 10;

  /* Floating label effect */
  ${Input}:focus + & {
    top: -10px;
    transform: scale(0.85);
  }

  ${Input}:not(:placeholder-shown) + & {
    top: -10px;
    transform: scale(0.85);
  }

  ${TextArea}:focus + & {
    top: -24px;
    transform: scale(0.85);
  }

  ${TextArea}:not(:placeholder-shown) + & {
    top: -24px;
    transform: scale(0.85);
  }
`;

export const Form = styled.form`
  max-width: 660px;
  margin-inline: auto;
  padding-inline: 2rem;
  @media (max-width: 426px) {
    padding-inline: 0;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  color: #f51010;
  margin-block: 0.2rem;
`;

export const ThanksMsg = styled.div`
  text-align: center;
  margin-inline: auto;
  margin-block: 2rem;
`;
