import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from "../../styles/GlobalStyles";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <MainHeading>contact me</MainHeading>
        <SubHeading as="h3">
          Let&apos;s Talk About <Highlight>Ideas!</Highlight>{" "}
        </SubHeading>
        <ContactForm />
      </Container>
    </Section>
  );
};
export default Contact;
