import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const SWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  cursor: pointer;
`;

interface Props {
  image: IGatsbyImageData;
}

export const Banner: React.FC<Props> = ({ image }) => {
  return (
    <SWrapper>
      <GatsbyImage objectFit="contain" alt="" image={image} />
    </SWrapper>
  );
};
