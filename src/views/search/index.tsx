import React from 'react';
import styled from 'styled-components';
import { BreadCrumbs } from 'components/bread-crumbs';
import { ResultList } from './components/results-list';

const SWrapper = styled.section`
  padding: 2.5rem;
`;

export const SearchView = () => {
  return (
    <SWrapper>
      <BreadCrumbs />
      <ResultList />
    </SWrapper>
  );
};
