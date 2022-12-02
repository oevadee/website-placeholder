import React, { ReactNode } from 'react';
import { Navigation } from 'modules/navigation';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
// import { Footer } from "modules/footer";

const SWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SMain = styled.main`
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.dimentions.nav});
  @media (max-width: 678px) {
    padding: 0 2rem;
  }
`;

interface Props {
  children: ReactNode;
  noFooter?: boolean;
}

export const Layout = ({ children, noFooter = false }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SWrapper>
      <Navigation />
      <SMain>{children}</SMain>
      {/* {!noFooter && <Footer />} */}
    </SWrapper>
  </ThemeProvider>
);
