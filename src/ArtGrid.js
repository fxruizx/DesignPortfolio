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
    let { tag } = this.props.match.params ? this.props.match.params : {};
    console.log("urlfilter:" + tag);
    
    try{
      //PROXY IS TO GET AROUND CORS AND CORBS DURING RSS FETCH
      let proxy = "https://cors-anywhere.herokuapp.com/";
      
      const result = tag ? await fetch(proxy+'https://franciscoxruiz.wordpress.com/tag/'+tag+'/feed/?format=xml') : await fetch(proxy+'https://franciscoxruiz.wordpress.com/feed/?format=xml');
      const artworkTxt = await result.text();
      const artworkJSON = await convert.xml2json(artworkTxt, {compact: true, spaces: 2});
      const artwork = JSON.parse(artworkJSON);
      tag = {};
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
                  desc: item["description"]._cdata,
                  imgsrc: item["media:content"][1]._attributes.url,
                  arttag: `${ item.category.map((props) => ( props._cdata ))}`
                }
              }
            }><ArtPiece arttag={`${ item.category.map((props) => ( props._cdata ))}`} title={ item.title._text } image={ item["media:content"][1]._attributes.url } imagesize={`${ window.innerWidth > 400 ? 360 : 300 }`} /></Link>
            ) 
          )}
        </ArtGridStyled>
    );
  }
}



const ArtGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-auto-flow: dense;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  width: 80%;
  
  @media screen and (max-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
  }
  
  /* Center Images in Grid cells */
  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

