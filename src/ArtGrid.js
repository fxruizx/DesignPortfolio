import React, { Component } from 'react';
import styled-components from 'styled-components'
import ArtPiece  from './ArtPiece';

export class ArtGrig extends Component {
  
  state = {
    portfolio: []
  }
  
  //GRAB PORTFOLIO FROM FRANCISCOXRUIZ.WORPRESS.COM, USING WP.COM AS A LAZY CMS
  async componentDidMount(){
    //CONVERT XML TO JSON
    const convert = require('xml-js');
    
    try{
      //PROXY IS TO GET AROUND CORS AND CORBS DURING RSS FETCH
      let proxy = "https://cors-anywhere.herokuapp.com/";
      const result = await fetch(proxy+'https://franciscoxruiz.wordpress.com/feed/?format=xml');
      const artworkTxt = await result.text();
      const artworkJSON = await convert.xml2json(artworkTxt, {compact: true, spaces: 2});
      const artwork = JSON.parse(artworkJSON)
      this.setState({
        portfolio: artwork.rss.channel.item
      })
    } catch(e){
      console.log(e);
    }
  }
  
  render() {
    return (
        <ArtGrid>
          { this.state.portfolio.length < 1 &&
            <p>loading...</p>
          }
          
          
          
        </ArtGrid>
    );
  }
  
  const ArtGrid = styled.div`
    border: 3px dotted red;
  `
  
  
};
