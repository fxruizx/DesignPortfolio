import React from 'react';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
// title and image are the props from ArtGrid.js
const ArtPiece = ({ title, image, imagesize, key }) => (
    <ArtPieceStyled key={ key } src={`${ image }?w=${ imagesize }`} alt={ title } title={ title } />
);

export default ArtPiece;

const ArtPieceStyled = styled.img`
    margin: 0 auto;
`;
