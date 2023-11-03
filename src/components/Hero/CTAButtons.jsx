import { CTA } from "../../styles/GlobalStyles";
import { CtaContainer } from "./Hero.style";

const CTAButtons = () => {
  return (
    <CtaContainer>
      <CTA variation="download">
        <a
          href="https://drive.google.com/file/d/1OTkEwShxxO7J9JiLEOCDOo_ekQiciS9Z/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download cv
        </a>
      </CTA>
      <CTA variation="download">
        <a
          href="https://www.upwork.com/freelancers/~01bd4db53d971c3393"
          target="_blank"
          rel="noopener noreferrer"
        >
          hire me!
        </a>
      </CTA>
    </CtaContainer>
  );
};
export default CTAButtons;
