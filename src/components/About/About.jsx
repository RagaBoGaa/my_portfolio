import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from "../../styles/GlobalStyles";

import { AboutMe, BoldText, SkillHead, Skills, Stacks } from "./About.style";
import { Brief, StacksIcons } from "./index";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <MainHeading>about me</MainHeading>
        <SubHeading as="h3">
          In case you&apos;re <BoldText>wondering </BoldText>💭 who{" "}
          <BoldText>I am...</BoldText>
        </SubHeading>

        <AboutMe>
          <Brief />
        </AboutMe>

        <Skills>
          <SkillHead>
            Some of my <Highlight>skills </Highlight> and{" "}
            <Highlight>stack</Highlight> I use :
          </SkillHead>

          <Stacks>
            <StacksIcons />
          </Stacks>
        </Skills>
      </Container>
    </Section>
  );
};
export default About;
