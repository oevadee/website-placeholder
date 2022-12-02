import { ProductCard } from 'components/product-card';
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
`;

export const BestSellers = () => {
  return (
    <SWrapper>
      <Heading>Shop best sellers</Heading>
      <SProductsCarousel>
        <ProductCard alt="product1" />
      </SProductsCarousel>
    </SWrapper>
  );
};
