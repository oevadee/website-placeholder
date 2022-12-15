import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.breadCrumbsText};
  margin-bottom: 4rem;
`;

export const BreadCrumbs = () => {
  return (
    <SWrapper>
      <h1>BreadCrumbs</h1>
    </SWrapper>
  );
};
