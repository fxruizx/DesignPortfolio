import React from 'react';

//FUNCTIONAL STATELESS COMPONENT
// title and image are the props from App.js
const ArtPiece = ({ title, image }) => (
    <img src={`${ image }?w=150`} alt={ title } title={ title } />
);

export default ArtPiece;
