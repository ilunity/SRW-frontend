import { Layout } from '@/components/Layout';
import { ReactElement } from 'react';

export const getStandardLayout = (page: ReactElement) => {
  return (
    <Layout>
      { page }
    </Layout>
  );
};
