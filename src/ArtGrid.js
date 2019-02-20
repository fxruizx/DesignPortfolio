import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ArtPiece  from './ArtPiece';
import PacLoader from './PacLoader';

export default class ArtGrid extends Component {
  
  state = {
    portfolio: [],
    tag: ''
  }
  
  //GRAB PORTFOLIO FROM HOSTSITE, USING WP.COM AS A LAZY CMS
  async fetchPortfolio(tag){ 
    /**** BELOW IS FOR WORDPRESS DATA ****
    const convert = require('xml-js'), //CONVERT XML TO JSON
          hostSite = 'https://franciscoxruiz.wordpress.com',
          proxy = "https://powerful-fjord-17912.herokuapp.com/";*/
          
    /**** BELOW IS FOR BEHANCE API ****/      
    const HOSTSITE = 'http://www.behance.net/v2/collections',
          APIKEY = 'CWMNQhHpXBN1VHlUg7HBYScp7iyLQ29H',
          PROXY = 'https://powerful-fjord-17912.herokuapp.com';
          
    //Check if tag exists as a prop of the location before concluding there is not tag
    if(!tag && this.props.match.params.tag){
      tag = this.props.match.params.tag;
    }
    
    //Associate an existing tag with it's BEHANCE collection id
    let collectionId = 0;
    switch(tag){
      case 'graphicdesign': 
        collectionId = 170844855;
        break;
      case 'webdesign':
        collectionId = 170846591;
        break;
      case 'pixelart':
        collectionId = 170846349;
        break;
      case 'socialmedia':
        collectionId = 170867761;
        break;
      default:
        // Defaults to the All collection
        collectionId = 170846615;
        break;
    }
    console.log("collectionId: "+collectionId);
    
    try{
      //If tag exists use it to grab feed of that tag, otherwise get all results
      /**** PULLING DATA FROM WORDPRESS RSS ****
      let result = tag ? await fetch(proxy+hostSite+'/tag/'+tag+'/feed/?format=xml') : await fetch(proxy+hostSite+'/feed/?format=xml'),
          artworkTxt = await result.text(),
          artworkJSON = await convert.xml2json(artworkTxt, {compact: true, spaces: 2}),
          artwork = JSON.parse(artworkJSON);*/
      /**** PULLING DATA FROM BEHANCE API ****/
      let result = await fetch(PROXY+'/'+HOSTSITE+'/'+collectionId+'/projects?api_key='+APIKEY),
          artwork = result.json();
      return artwork;
    } catch(e){
      console.log(e);
    }
  }
  
  async componentDidMount(){
    try{
      let artwork = await this.fetchPortfolio(this.state.tag);
      this.setState({
        /**** BELOW IS SETTING PORTFOLIO TO DATA FROM WORDPRESS
        portfolio: artwork.rss.channel.item ****/
        /**** BELOW IS SETTING PORTFOLIO TO DATA FROM BEHANCE ****/
        portfolio: artwork.projects
      });
    } catch(e){
      console.log(e);
    }
  }
  
  async componentDidUpdate(prevProps) {
    if (this.props.match.params.tag !== prevProps.match.params.tag) {
      this.setState({ tag: this.props.match.params.tag });
      try{
        let artwork = await this.fetchPortfolio(this.props.match.params.tag);
        this.setState({
          /**** BELOW IS SETTING PORTFOLIO TO DATA FROM WORDPRESS
          portfolio: artwork.rss.channel.item ****/
          /**** BELOW IS SETTING PORTFOLIO TO DATA FROM BEHANCE ****/
          portfolio: artwork.projects
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
            <PacLoader r={ 17 } g={ 153 } b={ 134 } />
          }
          
          {/**** BELOW IS MAPPING FROM WORDPRESS 
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
          )}*/}
          {/**** BELOW IS MAPPING FROM BEHANCE ****/}
          { this.state.portfolio.map((item) => (
              <Link key={ item.id } to={
                {
                  pathname: '../'+item.slug,
                  state: { 
                    title: item.slug,
                    id: item.id,
                    arttag: `${ item.fields.map((props) => (props))}`
                  }
                }
              }>
                <ArtPiece arttag={`${ item.fields.map((props) => (props))}`} title={ item.name } image={`${ window.innerWidth > 400 ? item.covers['404'] : item.covers['230'] }`} />
              </Link>
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

