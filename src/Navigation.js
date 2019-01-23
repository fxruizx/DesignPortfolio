import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
const Navigation = () => (
    <Nav>
        <Link className="App-link App-logo" to="/">FXR Design</Link>
        <ul>
            <li><Link className="App-link" to="/about">About</Link></li>
            <li><Link className="App-link" to="/contact">Contact</Link></li>
        </ul>
    </Nav>
);

export default Navigation;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  width: 80%;
  
  ul{ margin: 0; padding: 0; text-align: right; }
  ul li{ display: inline-block; padding-left: 1em; }
`;
