import 'normalize.css';

import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import React from 'react';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <GlobalStyles>
      <Typography />
      <Nav />
      {children}
      <Footer />
    </GlobalStyles>
  );
}
