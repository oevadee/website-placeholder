import { Button } from 'components/button';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: calc(33% - 1.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  alt: string;
}

export const ProductCard: React.FC<Props> = ({ alt }) => {
  const { file } = useStaticQuery(graphql`
    query IntroBannerQuery {
      file(relativePath: { eq: "intro-banner.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(file);

  if (!image) return <h1>No image found!</h1>;

  return (
    <SWrapper>
      <GatsbyImage
        image={image}
        alt={alt}
        style={{
          gridArea: 1 / 1,
        }}
      />
      <Button>Add to cart</Button>
    </SWrapper>
  );
};
