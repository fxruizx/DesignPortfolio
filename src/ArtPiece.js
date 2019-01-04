import React, { Component } from 'react';

export default class ArtPiece extends Component {
    render(){
        const { title, key } = this.props;
        console.log('ArtPiece component');
        
        return(
            <h1 key={ key }>{ title }</h1>
        );
    }
}
