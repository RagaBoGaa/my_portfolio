/* eslint-disable react/prop-types */
import {
  ServiceCard,
  ServiceIcon,
  ServiceContent,
  ServiceTitle,
  ServiceShortDesc,
  ServiceInfo,
  ServiceFeatures,
  FeatureItem,
  ServiceOverlay,
  ServiceHoverDetails,
} from './Services.style';
import { useState } from 'react';

const SingleServ = ({ icon, title, shortDesc, info, features, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ServiceCard
      color={color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ServiceOverlay isHovered={isHovered} color={color} />

      <ServiceIcon isHovered={isHovered}>{icon}</ServiceIcon>

      <ServiceContent>
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceShortDesc>{shortDesc}</ServiceShortDesc>
        <ServiceInfo>{info}</ServiceInfo>

        <ServiceFeatures>
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </ServiceFeatures>
      </ServiceContent>

      <ServiceHoverDetails isHovered={isHovered} color={color}>
        <h4>Key Features:</h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </ServiceHoverDetails>
    </ServiceCard>
  );
};
export default SingleServ;
