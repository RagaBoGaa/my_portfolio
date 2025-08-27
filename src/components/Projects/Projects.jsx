import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from '../../styles/GlobalStyles';

import SingleProj from './SingleProj';
import { ProjectsContainer } from './Projects.style';

const allProjects = [
  {
    name: 'Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my work history, technical skills, and professional achievements. Features dark/light theme, interactive animations, and optimized performance.',
    category: 'Personal Project',
    status: 'Live',
    highlights: [
      'Responsive design with mobile-first approach',
      'Dark/light theme switching with localStorage',
      'Interactive animations and micro-interactions',
      'Contact form with EmailJS integration',
      'SEO optimized with meta tags',
    ],
    stack: [
      'React 18',
      'Vite',
      'Styled-components',
      'EmailJS',
      'React-hook-form',
      'React-toastify',
      'Local Storage',
    ],
    linkDemo: 'https://bogafolio.vercel.app/',
    source: 'https://github.com/RagaBoGaa/my_portfolio',
    image: '/imgs/folio.webp',
    featured: true,
  },

  {
    name: 'E-commerce Platform',
    description:
      'Full-stack MERN e-commerce platform with comprehensive admin dashboard, secure payment processing, and advanced product management. Supports multiple payment methods and real-time inventory tracking.',
    category: 'Full-Stack Development',
    status: 'Live',
    highlights: [
      'Complete user authentication & authorization',
      'Stripe payment gateway integration',
      'Real-time inventory management',
      'Admin dashboard with analytics',
      'Image upload with Cloudinary',
      'Order tracking and management',
    ],
    stack: [
      'React 18',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Stripe',
      'Cloudinary',
    ],
    linkDemo: 'https://bogastore-mern.vercel.app/',
    source: '',
    image: '/imgs/bogaStore.webp',
    featured: true,
  },
  {
    name: 'SmartShelf',
    description:
      'Innovative smart storage solution platform designed to revolutionize order delivery and storage services. Reduces operational costs through automation and intelligent inventory management with real-time updates.',
    category: 'SaaS Platform',
    status: 'Live',
    highlights: [
      'AI-powered storage optimization',
      'Real-time inventory tracking with Firebase',
      'Push notifications for order updates',
      'Automated order processing',
      'Cost reduction analytics dashboard',
      'Multi-role user management',
    ],
    stack: [
      'React 18',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Framer Motion',
      'Firebase',
      'Google Maps API',
      'Firebase Cloud Messaging',
      'Real-time Database',
    ],
    linkDemo: 'https://api-restcountries.vercel.app/',
    source: '',
    image: '/imgs/smartshelf.webp',
    featured: true,
  },
  {
    name: 'Jahez Facility Management',
    description:
      'Comprehensive facility management platform for Jahez, streamlining maintenance operations, resource allocation, and service delivery with advanced scheduling and reporting capabilities.',
    category: 'Enterprise Solution',
    status: 'Live',
    highlights: [
      'Advanced scheduling system',
      'Resource management dashboard',
      'Real-time maintenance tracking',
      'Performance analytics',
      'Mobile-first design',
    ],
    stack: [
      'React 18',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
    ],
    linkDemo: 'https://jahez-service.com/',
    source: '',
    image: '/imgs/jahez.webp',
    featured: true,
  },
  {
    name: 'Weekend Map',
    description:
      'An advanced interactive Saudi tourism application that facilitates communication and access to tourist destinations. Enables service providers, companies, and tour guides to showcase their services, prices, and advertisements while allowing seamless communication with customers.',
    category: 'Tourism & Entertainment',
    status: 'Live',
    highlights: [
      'Interactive map with tourist destinations',
      'Service provider marketplace integration',
      'Real-time customer communication system',
      'Advanced form validation with Yup',
      'Smooth animations and transitions',
      'Multi-language support for Arabic/English',
    ],
    stack: [
      'React 18',
      'Vite',
      'TypeScript',
      'Framer Motion',
      'Formik',
      'Yup Validation',
      'Material-UI',
    ],
    linkDemo: 'https://ambassador.weekend-map.com/',
    source: '',
    image: '/imgs/weekendmap.webp',
    featured: true,
  },
  {
    name: 'Ertiqaa Education Platform',
    description:
      'Specialized e-learning platform for teaching Arabic to non-Arabs, featuring structured educational levels, interactive lessons, and real-time progress tracking with instant notifications for achievements.',
    category: 'EdTech Platform',
    status: 'Live',
    highlights: [
      'Multi-level curriculum structure',
      'Interactive learning modules with real-time sync',
      'Live progress notifications',
      'Modern UI/UX with Shadcn/ui',
      'Firebase-powered user sessions',
    ],
    stack: [
      'React 18',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Shadcn/ui',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
      'Lucide Icons',
      'Firebase',
      'Firebase Auth',
      'Real-time Database',
      'Firebase Cloud Messaging',
    ],
    linkDemo: 'https://ertiqaaedu.com/',
    source: '',
    image: '/imgs/ertiqa.webp',
    featured: true,
  },
];

const Projects = () => {
  // Sort projects to show featured ones first
  const sortedProjects = [...allProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <Section id='projects'>
      <Container>
        <MainHeading>Featured Work</MainHeading>
        <SubHeading as='h3'>
          Explore my latest <Highlight>projects</Highlight> & achievements
        </SubHeading>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--secondaryClr)',
            marginBottom: '1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}
        >
          From full-stack applications to modern web solutions, here&apos;s a
          showcase of my technical expertise and creative problem-solving
          abilities.
        </p>
        <ProjectsContainer>
          {sortedProjects.map((project, index) => (
            <SingleProj
              key={project.name}
              index={index}
              name={project.name}
              description={project.description}
              stack={project.stack}
              linkDemo={project.linkDemo}
              source={project.source}
              image={project.image}
              category={project.category}
              status={project.status}
              highlights={project.highlights}
              featured={project.featured}
            />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  );
};
export default Projects;
