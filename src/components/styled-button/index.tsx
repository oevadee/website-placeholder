import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.darkText};
  border-radius: 0.375rem;
  width: fit-content;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
`;

const SLink = styled(Link)`
  ${buttonStyles}
`;

const SButton = styled.button`
  ${buttonStyles}
  border: none;
`;

interface Props {
  to?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

export const StyledButton = ({
  to,
  children,
  type = 'button',
  className,
}: Props) => {
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
