import { Banner } from 'components/banner';
import React from 'react';
import { BestSellers } from './containers/best-sellers';

export const IndexView = () => {
  return (
    <div>
      <Banner />
      <BestSellers />
    </div>
  );
};
