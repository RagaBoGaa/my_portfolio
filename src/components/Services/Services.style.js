import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ServiceCard = styled.div`
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(145deg, #1e293b 0%, #334155 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const ServiceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${(props) => props.color};
  transform: scaleX(${(props) => (props.isHovered ? 1 : 0)});
  transition: transform 0.3s ease;
  transform-origin: left;
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${(props) => (props.isHovered ? float : 'none')} 2s ease-in-out
    infinite;
  transition: transform 0.2s ease;
`;

export const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 2;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;

  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
`;

export const ServiceShortDesc = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

export const ServiceInfo = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #475569;
  margin-bottom: 1rem;
  flex: 1;

  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`;

export const ServiceFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  margin-top: auto;
  align-items: start;
`;

export const FeatureItem = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.2rem 0;
  min-height: 1.2rem;
  line-height: 1.2;

  /* Ensure checkmark stays at top for multi-line text */
  &::before {
    content: '✓';
    flex-shrink: 0;
    margin-top: 0.05rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

export const ServiceHoverDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    145deg,
    ${(props) => props.color}f0 0%,
    ${(props) => props.color}e5 100%
  );
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  visibility: ${(props) => (props.isHovered ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  animation: ${(props) => (props.isHovered ? scaleIn : 'none')} 0.3s ease;
  border-radius: 16px;
  z-index: 10000;
  backdrop-filter: blur(10px);

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.4rem 0;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: '✨';
      font-size: 0.8rem;
    }
  }
`;

// Legacy components for backward compatibility
export const SingleService = styled(ServiceCard)``;
export const InfoText = styled(ServiceContent)``;
