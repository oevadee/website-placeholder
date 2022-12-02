import React from 'react';
import SearchIcon from 'assets/search.svg';
import styled from 'styled-components';

const SForm = styled.form`
  width: ${({ theme }) => theme.dimentions.inputWidth};
  color: ${({ theme }) => theme.colors.inputText};
  display: flex;
  flex: 1 1;
  font-size: ${({ theme }) => theme.font.size.small};
  height: ${({ theme }) => theme.dimentions.inputHeight};
  line-height: 2.5rem;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  border-radius: 1.25rem;
  border: ${({ theme }) => theme.border.search};
  margin: 0 1rem;
`;

const SSearchIcon = styled(SearchIcon)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const SInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background: transparent;
  color: #7e8185;
  padding: 0.3125rem 0.3125rem 0.3125rem 2.8125rem;
  border: none;
`;

interface Props {
  placeholder?: string;
}

export const SearchInput: React.FC<Props> = ({
  placeholder = 'Insert text here',
}) => {
  return (
    <SForm>
      <SSearchIcon />
      <SInput type="search" placeholder={placeholder} />
    </SForm>
  );
};
