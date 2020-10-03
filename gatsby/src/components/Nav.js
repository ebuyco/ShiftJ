import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.nav`
  background: green;
`;
export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/slicemasters/">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order/">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
