import React, { Component } from 'react';

export default class ArtPiece extends Component {
    render(){
        const { title } = this.props;
        console.log('ArtPiece component');
        
        return(
            <h1>{ title }</h1>
        );
    }
}
