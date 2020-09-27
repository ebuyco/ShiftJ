import { Link } from 'gatsby';
import React from 'react';

function goToSlicemasters() {
  console.log('Go to Slice Masters');
  setTimeout(() => {
    console.log('Set timeout');
    navigate('/slicemaster', { replace: true });
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
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
    </nav>
  );
}
