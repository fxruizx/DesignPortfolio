import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
const Navigation = () => (
    <Nav>
        <Link className="App-link App-logo" to="/">FXR Design</Link>
        <ul>
            <li><Link className="App-link" to="/about">About</Link></li>
            <li><a href="https://github.com/fxruizx"><FontAwesomeIcon icon={ faGithub } /></a></li>
            <li><a href="https://instagram.com/fxruizx"><FontAwesomeIcon icon={ faInstagram } /></a></li>
            <li><a href="https://www.linkedin.com/in/fxruiz/"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
            <li><a href="mailto:fxruiz@outlook.com"><FontAwesomeIcon icon={ faEnvelope } /></a></li>
            {/*<li><Link className="App-link" to="/contact">Contact</Link></li>*/}
        </ul>
    </Nav>
);

export default Navigation;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  grid-column-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1280px;
  width: 80%;
  
  ul{ font-size: .8em; line-height: 1.6em; margin: 0; padding: 0; text-align: right; }
  ul li{ display: inline-block; padding-left: .75em; }
`;
