import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from "../../styles/GlobalStyles";

import SingleProj from "./SingleProj";
import { ProjectsContainer } from "./Projects.style";

const allProjects = [
  {
    name: "Portfolio",
    description: "Includes my work history, skills, and contact information.",
    stack: [
      "React",
      "Vite",
      "Styled-components",
      "Emailjs",
      "React-hook-form",
      "React-toastify",
      "Local Storage",
    ],
    linkDemo: "https://bogafolio.vercel.app/",
    source: "https://github.com/RagaBoGaa/my_portfolio",
    image: "/imgs/folio.webp",
  },
  {
    name: "E-commerce",
    description: "E-commerce site with dummyAPI",
    stack: [
      "React",
      "Vite",
      "Redux/toolkit",
      "Tailwindcss",
      "React-Slick",
      "Fetch",
      "Dummy API",
      "Local Storage",
    ],
    linkDemo: "https://bogastore.vercel.app/",
    source: "https://github.com/RagaBoGaa/bogastore",
    image: "/imgs/bogaStore.webp",
  },
  {
    name: "CountriesAPI",
    description: "Find any country in the world!",
    stack: [
      "React",
      "Vite",
      "React-Router",
      "React-Paginate",
      "Fetch",
      "Countries API",
    ],
    linkDemo: "https://api-restcountries.vercel.app/",
    source: "https://github.com/RagaBoGaa/countries",
    image: "/imgs/countriesAPI.webp",
  },
  {
    name: "Modern Todo App ",
    description: "A modern draggable & droppable todo app",
    stack: ["React", "Vite", "React-beautiful-dnd", "Local Storage"],
    linkDemo: "https://my1st-react-app.vercel.app/",
    source: "https://github.com/RagaBoGaa/react-todo",
    image: "/imgs/Todo.webp",
  },
  {
    name: "Weather App",
    description: "Toggle between fahrenheit & celsius",
    stack: ["React", "Vite", "Styled-components", "OpenWeather API"],
    linkDemo: "https://my-weatheraapp.vercel.app/",
    source: "https://github.com/RagaBoGaa/weather_app",
    image: "/imgs/weather.webp",
  },
  {
    name: "EasyBank landing page",
    description: "A basic landing page",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkDemo: "https://ragabogaa.github.io/easybank/",
    source: "https://github.com/RagaBoGaa/easybank",
    image: "/imgs/easyBank.webp",
  },
  {
    name: "Bookmark landing page",
    description: "A basic landing page",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkDemo: "https://ragabogaa.github.io/bookmark",
    source: "https://github.com/RagaBoGaa/bookmark",
    image: "/imgs/bookmark.webp",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <MainHeading>My Projects</MainHeading>
        <SubHeading as="h3">
          Take a 👀 on my latest <Highlight>projects!</Highlight>
        </SubHeading>
        <ProjectsContainer>
          {allProjects.map((project) => (
            <SingleProj
              key={project.name}
              name={project.name}
              description={project.description}
              stack={project.stack}
              linkDemo={project.linkDemo}
              source={project.source}
              image={project.image}
            />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  );
};
export default Projects;
