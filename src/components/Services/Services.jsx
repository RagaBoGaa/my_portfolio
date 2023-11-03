import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from "../../styles/GlobalStyles";
import { ServicesContainer } from "./Services.style";

import SingleServ from "./SingleServ";

const MyServices = [
  {
    src: "development.json",
    title: "Web Development",
    info: "My Front-End Development Service Offers Dynamic, Fast And Interactive Web Applications.",
  },
  {
    src: "responsive.json",
    title: "Responsive Design",
    info: "I Design Beautiful And Responsive Websites On All Devices, Which Make User Experience Great.",
  },
  {
    src: "update.json",
    title: "Edit & Update",
    info: "I Can Edit Your Website If You Need To Add New Features, Add New Design, Or Fix Responsive Web Design Problems.",
  },
];

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <MainHeading>Services</MainHeading>
        <SubHeading as="h3">
          What I <Highlight>offer?</Highlight>
        </SubHeading>

        <ServicesContainer>
          {MyServices.map((service) => (
            <SingleServ
              key={service.title}
              src={service.src}
              title={service.title}
              info={service.info}
            />
          ))}
        </ServicesContainer>
      </Container>
    </Section>
  );
};
export default Services;
