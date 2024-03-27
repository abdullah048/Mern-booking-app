import { ElementType } from 'react';
import Layout from './Layout';

interface Props {}

const WithLayout = (WrappedComponent: ElementType) => (props: Props) => {
  return (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};

export default WithLayout;
