import { useEffect, useState } from "react";

import HeroBgAnimation from "./HeroBgAnimation";

import { Container, Row, Section } from "../../styles/GlobalStyles";
import { Heading, LeftSide, Name, RightSide, Stack, Tags } from "./Hero.style";

import CTAButtons from "./CTAButtons";
import Social from "../../utils/Social/Social";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = ["fly-high", "committed", "self-taught", "passionate"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex === text.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentIndex, text.length]);

  return (
    <Section>
      <Container>
        <Row variation="column">
          <LeftSide>
            <div>
              <Heading>
                Hello,✌
                <br />
                It&apos;s <Name>Ragab</Name>
              </Heading>
              <span>
                I&apos;m a&nbsp;<Tags>{text[currentIndex]} &nbsp;</Tags>
                <Stack>Front-end developer</Stack>
              </span>
            </div>
            <HeroBgAnimation />
            <CTAButtons />
          </LeftSide>

          <RightSide>
            <img src="hand-coding-animate.svg" alt="hand-coding image" />
          </RightSide>
        </Row>

        <Social />
      </Container>
    </Section>
  );
};
export default Hero;
