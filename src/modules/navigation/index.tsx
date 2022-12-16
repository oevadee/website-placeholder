import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { NavSearch } from './containers/nav-search';

const SNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  background-color: ${({ theme }) => theme.colors.nav};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 2.5rem;
  border-bottom: ${({ theme }) => theme.border.nav};

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const SLogoNavWrapper = styled.div`
  display: flex;
`;

const SLogo = styled(Logo)`
  margin-right: 2.5rem;
`;

const SList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  list-style: none;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ListItem = styled.li<{ isActive?: boolean; isSpecial?: boolean }>`
  > a {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 0.875rem;
    text-transform: uppercase;
    color: ${({ theme, isSpecial }) =>
      isSpecial ? theme.colors.navItemSpecial : theme.colors.navItem};
  }
  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.navItemHover};
  }
`;

export const Navigation = () => {
  return (
    <SNav>
      <SLogoNavWrapper>
        <Link to="/">
          <SLogo />
        </Link>
        <SList>
          <ListItem isSpecial>
            <Link to="/new-collection">new collection</Link>
          </ListItem>
          <ListItem>
            <Link to="/shop">shop</Link>
          </ListItem>
          <ListItem>
            <Link to="/discover">discover</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">contact</Link>
          </ListItem>
        </SList>
      </SLogoNavWrapper>
      <NavSearch />
    </SNav>
  );
};
