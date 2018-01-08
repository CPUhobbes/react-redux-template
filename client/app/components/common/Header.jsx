import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {' | '}
    <Link to="/child" activeClassName="active">Child Component</Link>
  </nav>
);

export default Header;
