import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { SearchInput } from 'components/search-input';
import BagIcon from 'assets/bag.svg';

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
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  border-bottom: ${({ theme }) => theme.border.nav};
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

const SSearchBagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SBagIcon = styled(BagIcon)`
  height: 1.5rem;
  margin-left: 1.25rem;
  cursor: pointer;
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
      <SSearchBagWrapper>
        <SearchInput />
        <SBagIcon />
      </SSearchBagWrapper>
    </SNav>
  );
};
