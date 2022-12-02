import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { NotFoundView } from 'views/404';
import { NotFoundLayout } from 'layouts/not-foundlayout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundLayout>
      <NotFoundView />
    </NotFoundLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
