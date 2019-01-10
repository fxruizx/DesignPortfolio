import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArtPiece  from './ArtPiece';

export default class ArtGrid extends Component {
  
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
      const artwork = JSON.parse(artworkJSON);
      this.setState({
        portfolio: artwork.rss.channel.item
      });
    } catch(e){
      console.log(e);
    }
  }
  
  render() {
    return (
        <ArtGridStyled>
          { this.state.portfolio.length < 1 &&
            <p>loading...</p>
          }
          
          { this.state.portfolio.map((item) => (
            <Link key={ item.guid._text } to={ 
              {
                pathname: item.title._text.replace(/ /g, '-'),
                state: {
                  title: item.title._text,
                  imgsrc: item["media:content"][1]._attributes.url
                }
              }
            }><ArtPiece title={ item.title._text } image={ item["media:content"][1]._attributes.url } imagesize={ 150 } /></Link>
            ) 
          )}
        </ArtGridStyled>
    );
  }
}



const ArtGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: dense;
  grid-row-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

