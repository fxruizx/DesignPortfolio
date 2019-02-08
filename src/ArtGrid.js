import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ArtPiece  from './ArtPiece';

export default class ArtGrid extends Component {
  
  state = {
    portfolio: [],
    tag: ''
  }
  
  //GRAB PORTFOLIO FROM HOSTSITE, USING WP.COM AS A LAZY CMS
  async fetchPodcast(tag){ 
    const convert = require('xml-js'), //CONVERT XML TO JSON
          hostSite = 'https://franciscoxruiz.wordpress.com',
          proxy = "https://powerful-fjord-17912.herokuapp.com/";
          
    //Check if tag exists as a prop of the location before concluding there is not tag
    if(!tag && this.props.match.params.tag){
      tag = this.props.match.params.tag;
    }
    try{
      //If tag exists use it to grab feed of that tag, otherwise get all results
      let result = tag ? await fetch(proxy+hostSite+'/tag/'+tag+'/feed/?format=xml') : await fetch(proxy+hostSite+'/feed/?format=xml'),
          artworkTxt = await result.text(),
          artworkJSON = await convert.xml2json(artworkTxt, {compact: true, spaces: 2}),
          artwork = JSON.parse(artworkJSON);
      return artwork;
    } catch(e){
      console.log(e);
    }
  }
  
  async componentDidMount(){
    try{
      let artwork = await this.fetchPodcast(this.state.tag);
      this.setState({
        portfolio: artwork.rss.channel.item
      });
    } catch(e){
      console.log(e);
    }
  }
  
  async componentDidUpdate(prevProps) {
    if (this.props.match.params.tag !== prevProps.match.params.tag) {
      this.setState({ tag: this.props.match.params.tag });
      try{
        let artwork = await this.fetchPodcast(this.props.match.params.tag);
        this.setState({
          portfolio: artwork.rss.channel.item
        });
      } catch(e){console.log(e)}
    }
  }
  
  
  render() {
    
    const FilterSelect = withRouter(({ history }) => (
    <select value='' onChange={(event) => { let val = event.target.value ? `/filter/${ event.target.value }`: event.target.value; history.push(val)}}>
      <option value="" disabled>Select Filter &#9662;</option>
      <option value="">All</option>
      <option value="webdesign">Web Design</option>
      <option value="graphicdesign">Graphic Design</option>
      <option value="socialmedia">Social Media Design</option>
      <option value="pixelart">Pixel Art</option>
    </select>
    ));
    
    return (
      <div>
        <FiltersStyled>
          <li>  Filters:  </li>
          <li>  <Link to="/">All</Link>  </li>
          <li>  <Link to="/filter/webdesign">Web Design</Link>  </li>
          <li>  <Link to="/filter/graphicdesign">Graphic Design</Link>  </li>
          <li>  <Link to="/filter/socialmedia">Social Media Design</Link>  </li> 
          <li>  <Link to="/filter/pixelart">Pixel Art</Link>  </li>
          <li className="mobile-only">
            <FilterSelect/>
          </li>
        </FiltersStyled>
        <ArtGridStyled>
          { this.state.portfolio.length < 1 &&
            <p>loading...</p>
          }
          
          { this.state.portfolio.map((item) => (
            <Link key={ item.guid._text } to={ 
              {
                pathname: '../'+item.title._text.replace(/ /g, '-'),
                state: {
                  title: item.title._text,
                  desc: item["description"]._cdata,
                  imgsrc: item["media:content"][1]._attributes.url,
                  arttag: `${ item.category.map((props) => ( props._cdata ))}`
                }
              }
            }><ArtPiece arttag={`${ item.category.map((props) => ( props._cdata ))}`} title={ item.title._text } image={ item["media:content"][1]._attributes.url } imagesize={`${ window.innerWidth > 400 ? 400 : 300 }`} /></Link>
            ) 
          )}
        </ArtGridStyled>
      </div>
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
  max-width: 1280px;
  width: 80%;
  
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
  }
  
  /* Center Images in Grid cells */
    a { display: flex; justify-content: center; align-items: center; }
  img { height: auto; max-width: 100%; }
`;

const FiltersStyled = styled.ul`
  display: block;
  font-size: .9em;
  margin: 1.5em auto 0 auto;
  padding: 0;
  width: 80%;
  
  li{ 
    display: inline-block; margin: 0 .5em;
    @media screen and (max-width: 600px){
      display: none;
    }
  }
  li.mobile-only{
    display: none;
    @media screen and (max-width: 600px){
      border: 1px solid #198; border-radius: 4px; color: #198; display: inline; padding: .25em;
    }
  }
  li a{ border: 1px solid #198; border-radius: 4px; color: #198; padding: .25em; text-decoration: none; }
  
  
`;

