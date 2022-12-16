import { Button } from 'components/button';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: calc(33% - 1.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ theme }) => theme.border.card};
`;

const SImage = styled(GatsbyImage)`
  height: 374px;
  width: 100%;
`;

const SBottomnWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-align: center;
  min-height: 10rem;
  padding: 0.625rem;
  position: relative;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    min-height: 11.25rem;
    padding: 1.25rem 0.9375rem;
  }
`;

const SHeading = styled.h5`
  color: ${({ theme }) => theme.colors.cardHeading};
  text-transform: uppercase;
  word-break: normal;
  overflow: hidden;
`;

const SDescription = styled.p`
  color: ${({ theme }) => theme.colors.cardInfo};
  margin-top: 0.125rem;
  text-transform: capitalize;
  letter-spacing: 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    margin-top: 0.3125rem;
  }
`;

const SPrice = styled.p`
  color: ${({ theme }) => theme.colors.cardInfo};
  margin-top: 0.125rem;
  letter-spacing: 0;

  @media (min-width: 1024px) {
    margin-top: 0.3125rem;
  }
`;

const SButton = styled(Button)`
  position: absolute;
  bottom: 0.75rem;
  margin-top: auto;
  width: calc(100% - 1.25rem);

  @media (min-width: 1024px) {
    width: calc(100% - 1.875rem);
    bottom: 1.5625rem;
  }
`;

interface Props {
  alt: string;
  image: IGatsbyImageData;
  title: string;
  description: string;
  price: string;
}

export const ProductCard: React.FC<Props> = ({
  alt,
  image,
  title,
  description,
  price,
}) => {
  return (
    <SWrapper>
      <SImage
        image={image}
        alt={alt}
        style={{
          gridArea: 1 / 1,
        }}
      />
      <SBottomnWrapper>
        <SHeading>{title}</SHeading>
        <SDescription>{description}</SDescription>
        <SPrice>{price}</SPrice>
        <SButton>Add to cart</SButton>
      </SBottomnWrapper>
    </SWrapper>
  );
};
