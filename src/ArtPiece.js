import React, { Component } from 'react';

export default class ArtPiece extends Component {
    render(){
        const { title, image } = this.props;
        console.log('ArtPiece component' + { image });
        
        return(
            <div>
                <h1>{ title }</h1>
                <img src={`${ image }?w=150`} alt={ title } title={ title } />
            </div>
        );
    }
}
