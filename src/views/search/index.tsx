import React from 'react';
import styled from 'styled-components';
import { BreadCrumbs } from 'components/bread-crumbs';
import { ResultList } from './components/results-list';

const SWrapper = styled.section`
  padding: 2.5rem;
`;

const SNoResults = styled.p`
  text-align: center;
`;

export const SearchView = () => {
  const what = new URLSearchParams(location.search).get('what');
  return (
    <SWrapper>
      <BreadCrumbs />
      {what ? <ResultList what={what} /> : <SNoResults>No results</SNoResults>}
    </SWrapper>
  );
};
