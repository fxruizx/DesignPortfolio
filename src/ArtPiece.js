import React from 'react';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
// title and image are the props from App.js
const ArtPiece = ({ title, image }) => (
    <Art src={`${ image }?w=150`} alt={ title } title={ title } />
);

export default ArtPiece;

const Art = styled.img`
    margin: 0 auto;
`;
