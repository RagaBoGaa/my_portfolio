/* eslint-disable react/prop-types */
import { CTA, Highlight } from '../../styles/GlobalStyles';
import {
  BtnsContainer,
  Info,
  SingleProject,
  StackContainer,
  StackHighlight,
  ProjectHighlights,
  HighlightItem,
  ProjectImage,
  FeaturedBadge,
  ProjectTitle,
  ProjectDescription,
  StatusBadge,
} from './Projects.style';

import { GithubIcon, LinkIcon } from '../../icons';

const SingleProj = ({
  index,
  image,
  name,
  description,
  stack,
  linkDemo,
  source,
  category,
  status,
  highlights,
  featured,
}) => {
  return (
    <SingleProject featured={featured} index={index}>
      {featured && <FeaturedBadge>⭐ Featured</FeaturedBadge>}

      <ProjectImage>
        <img src={image} alt={name} />
        <div className='overlay'>
          <div className='overlay-content'>
            <StatusBadge status={status}>{status}</StatusBadge>
            <p className='category'>{category}</p>
          </div>
        </div>
      </ProjectImage>

      <Info>
        <div>
          <ProjectTitle>
            <Highlight>{name}</Highlight>
          </ProjectTitle>

          <ProjectDescription>{description}</ProjectDescription>

          <ProjectHighlights>
            {highlights.map((highlight, index) => (
              <HighlightItem key={index}>{highlight}</HighlightItem>
            ))}
          </ProjectHighlights>
        </div>

        <StackContainer>
          {stack.map((tech) => (
            <StackHighlight key={tech}>{tech}</StackHighlight>
          ))}
        </StackContainer>
      </Info>

      <BtnsContainer>
        <CTA variation='preview'>
          <a href={linkDemo} target='_blank' rel='noopener noreferrer'>
            <LinkIcon /> Live Demo
          </a>
        </CTA>
        {source && (
          <CTA variation='preview'>
            <a href={source} target='_blank' rel='noopener noreferrer'>
              <GithubIcon /> Source Code
            </a>
          </CTA>
        )}
      </BtnsContainer>
    </SingleProject>
  );
};
export default SingleProj;
