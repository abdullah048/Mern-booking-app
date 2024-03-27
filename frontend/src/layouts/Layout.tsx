import { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '@components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
