import React from 'react';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
// title and image are the props from ArtGrid.js
const ArtPiece = ({ title, image, imagesize }) => (
    <Art src={`${ image }?w=${ imagesize }`} alt={ title } title={ title } />
);

export default ArtPiece;

const Art = styled.img`
    margin: 0 auto;
`;
