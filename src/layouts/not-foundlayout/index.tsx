import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

const SWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SMain = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - ${({ theme }) => theme.dimentions.nav});
  padding: 0 11.75rem;
  @media (max-width: 678px) {
    padding: 0 2rem;
  }
`;

interface Props {
  children: ReactNode;
  noFooter?: boolean;
}

export const NotFoundLayout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SWrapper>
      <SMain>{children}</SMain>
    </SWrapper>
  </ThemeProvider>
);
