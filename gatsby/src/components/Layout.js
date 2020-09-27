import Footer from './Footer';
import Nav from './Nav';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <h2>{children}</h2>
      <Footer />
    </>
  );
}
