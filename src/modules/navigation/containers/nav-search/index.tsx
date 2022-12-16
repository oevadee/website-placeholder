import React from 'react';
import styled from 'styled-components';
import { SearchInput } from 'components/search-input';
import BagIcon from 'assets/bag.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { navigate } from 'gatsby';

const SSearchBagWrapper = styled.form`
  display: flex;
  align-items: center;
`;

const SBagIcon = styled(BagIcon)`
  height: 1.5rem;
  margin-left: 1.25rem;
  cursor: pointer;
`;

export type NavSearchInput = {
  what: string;
};

export const NavSearch = () => {
  const { register, handleSubmit } = useForm<NavSearchInput>();

  const onSubmit: SubmitHandler<NavSearchInput> = ({ what }) =>
    what && navigate(`/search?what=${what}`);

  return (
    <SSearchBagWrapper onSubmit={handleSubmit(onSubmit)}>
      <SearchInput register={register} />
      <SBagIcon />
    </SSearchBagWrapper>
  );
};
