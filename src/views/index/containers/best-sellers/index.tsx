import { ProductCard } from 'components/product-card';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 8%;
  width: 82%;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.bigger};
  letter-spacing: ${({ theme }) => theme.letterSpacing.narrow};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const SProductsCarousel = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
`;

export const BestSellers = () => {
  const data = useStaticQuery(graphql`
    query BestSellers {
      product1: file(relativePath: { eq: "products/product1.webp" }) {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      product2: file(relativePath: { eq: "products/product2.webp" }) {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      product3: file(relativePath: { eq: "products/product3.jpeg" }) {
        id
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

  const product1Image = getImage(data.product1);
  const product2Image = getImage(data['product2']);
  const product3Image = getImage(data['product3']);

  return (
    <SWrapper>
      <Heading>Shop best sellers</Heading>
      <SProductsCarousel>
        {product1Image && (
          <ProductCard
            alt="product1"
            image={product1Image}
            title="Kylie Matte Lip Kit"
            description="comfortable on lips. 8-hour wear."
            price="€31.99"
          />
        )}
        {product2Image && (
          <ProductCard
            alt="product2"
            image={product2Image}
            title="Booked and Busy Lip Blush Kit"
            description="non-drying + soft-matte finish"
            price="€31.99"
          />
        )}
        {product3Image && (
          <ProductCard
            alt="product3"
            image={product3Image}
            title="Boss Matte Lip Kit"
            description="comfortable on lips. 8-hour wear."
            price="€31.99"
          />
        )}
      </SProductsCarousel>
    </SWrapper>
  );
};
