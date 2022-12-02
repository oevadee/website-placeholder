import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { IndexView } from '../views/index';
import { Layout } from '../layouts';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <IndexView />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
