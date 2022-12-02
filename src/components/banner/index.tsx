import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Banner = () => {
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

  if (!image) return <h1>No image found</h1>;

  return (
    <SWrapper>
      <GatsbyImage style={{}} objectFit="contain" alt="" image={image} />
    </SWrapper>
  );
};
