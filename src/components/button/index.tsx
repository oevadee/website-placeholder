import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  width: fit-content;
  min-height: 2.8125rem;
  padding: 0.9rem 0;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.font.size.smaller};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.narrow};
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 210px;
`;

const SLink = styled(Link)`
  ${buttonStyles}
`;

const SButton = styled.button`
  ${buttonStyles}
  border: ${({ theme }) => theme.border.button};
  :hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.buttonTextHover};
  }
`;

interface Props {
  to?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

export const Button = ({ to, children, type = 'button', className }: Props) => {
  if (!to) {
    return (
      <SButton className={className} type={type}>
        {children}
      </SButton>
    );
  }
  return (
    <SLink to={to} type={type} className={className}>
      {children}
    </SLink>
  );
};
