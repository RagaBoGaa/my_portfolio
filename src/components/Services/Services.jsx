import {
  Container,
  Highlight,
  MainHeading,
  Section,
  SubHeading,
} from '../../styles/GlobalStyles';
import { ServicesContainer } from './Services.style';

import SingleServ from './SingleServ';

const MyServices = [
  {
    icon: '💻',
    title: 'Web Development',
    shortDesc: 'Modern & Responsive Websites',
    info: 'I create fast, interactive, and SEO-optimized web applications using the latest technologies like React, JavaScript, and modern frameworks.',
    features: [
      'React & TypeScript',
      'Responsive Design',
      'SEO Optimized',
      'Fast Performance',
    ],
    color: '#4F46E5',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    shortDesc: 'Mobile-First Approach',
    info: 'I design beautiful and fully responsive websites that work seamlessly across all devices, ensuring great user experience on mobile, tablet, and desktop.',
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatible',
      'Touch Optimized',
      'Flexible Layouts',
    ],
    color: '#06B6D4',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    shortDesc: 'Keep Your Site Updated',
    info: 'I provide ongoing website maintenance, updates, and improvements including bug fixes, feature additions, performance optimization, and content updates.',
    features: [
      'Bug Fixes',
      'Feature Updates',
      'Performance Boost',
      'Content Management',
    ],
    color: '#10B981',
  },

  {
    icon: '⚡',
    title: 'Performance Optimization',
    shortDesc: 'Lightning Fast Websites',
    info: 'I optimize websites for maximum speed and performance through code optimization, image compression, caching strategies, and modern best practices.',
    features: [
      'Code Optimization',
      'Image Compression',
      'Caching Strategies',
      'Core Web Vitals',
    ],
    color: '#EF4444',
  },
];

const Services = () => {
  return (
    <Section id='services'>
      <Container>
        <MainHeading>Services</MainHeading>
        <SubHeading as='h3'>
          What I <Highlight>offer?</Highlight>
        </SubHeading>

        <ServicesContainer>
          {MyServices.map((service) => (
            <SingleServ
              key={service.title}
              icon={service.icon}
              title={service.title}
              shortDesc={service.shortDesc}
              info={service.info}
              features={service.features}
              color={service.color}
            />
          ))}
        </ServicesContainer>
      </Container>
    </Section>
  );
};
export default Services;
