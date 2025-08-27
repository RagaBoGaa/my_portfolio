import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SingleProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--primaryBg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${(props) => `${props.index * 0.1}s`};
  animation-fill-mode: both;
  border: ${(props) =>
    props.featured
      ? '2px solid var(--highlightClr)'
      : '1px solid rgba(0, 0, 0, 0.05)'};
  height: auto;
  min-height: 520px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  [data-theme='dark'] & {
    background: rgba(47, 47, 62, 0.8);
    border: ${(props) =>
      props.featured
        ? '2px solid var(--highlightClr)'
        : '1px solid rgba(255, 255, 255, 0.08)'};
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-height: 480px;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, var(--highlightClr), #ff7a5c);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(242, 95, 76, 0.3);
  animation: ${pulse} 2s infinite;
`;

export const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(242, 95, 76, 0.8) 100%
    );
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay-content {
    text-align: center;
    color: white;

    .category {
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 6px;
      opacity: 0.9;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
    }
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${(props) => {
    switch (props.status) {
      case 'Live':
        return '#10B981';
      case 'In Progress':
        return '#F59E0B';
      case 'Completed':
        return '#6366F1';
      default:
        return 'var(--highlightClr)';
    }
  }};
  color: white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  flex: 1;
  justify-content: space-between;
  gap: 1rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  color: var(--secondaryClr);
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4rem;
`;

export const ProjectHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const HighlightItem = styled.div`
  position: relative;
  padding-left: 1rem;
  font-size: 0.82rem;
  line-height: 1.3;
  color: var(--secondaryClr);

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--highlightClr);
    font-weight: bold;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  [data-theme='dark'] & {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const StackHighlight = styled.span`
  display: inline-block;
  color: var(--primaryClr);
  background: rgba(242, 95, 76, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid rgba(242, 95, 76, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: var(--highlightClr);
    color: white;
    transform: translateY(-1px);
  }

  &.more {
    background: var(--highlightClr);
    color: white;
    font-weight: 600;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 1.2rem 1.2rem;
  gap: 0.8rem;
  margin-top: auto;

  > * {
    flex: 1;
    max-width: 140px;
  }
`;
