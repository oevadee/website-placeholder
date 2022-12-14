import { Banner } from '../../components/banner';
import React from 'react';
import { BestSellers } from './containers/best-sellers';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const IndexView = () => {
  const data = useStaticQuery(graphql`
    query Index {
      banner1: file(relativePath: { eq: "intro-banner.webp" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      banner2: file(relativePath: { eq: "news-banner.webp" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const banner1Image = getImage(data.banner1);
  const banner2Image = getImage(data.banner2);

  return (
    <div>
      {banner1Image && <Banner image={banner1Image} />}
      <BestSellers />
      {banner2Image && <Banner image={banner2Image} />}
    </div>
  );
};
