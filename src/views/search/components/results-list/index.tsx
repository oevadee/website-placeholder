import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SResultsAmount = styled.p`
  font-family: ${({ theme }) => theme.font.family.notoSansJapanese};
  color: ${({ theme }) => theme.colors.info};
  text-transform: uppercase;
  margin: 0.625rem 0;
`;

const SHeader = styled.h6`
  font-size: ${({ theme }) => theme.font.size.biggest};
  text-transform: uppercase;
`;

interface Props {
  what: string;
}

export const ResultList: React.FC<Props> = ({ what }) => {
  return (
    <SWrapper>
      <SResultsAmount>100 SEARCH RESULTS FOR</SResultsAmount>
      <SHeader>{what}</SHeader>
      ...products
    </SWrapper>
  );
};
