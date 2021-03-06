import React, { Component } from 'react';
import styled from 'styled-components';
import PacLoader from './PacLoader';
//import ArtPiece from './ArtPiece';


export default class ArtDetail extends Component {
  
  /**** BELOW IS ARTDETAIL FOR BEHANCE ****/
  state = {
    artwork: {
      project: {
        colors: [{
          r: '',
          g: '',
          b: ''
        }],
        name: '',
        id: 0,
        fields: [],
        description: '',
        modules: [{
          sizes: ''
        }]
      }
    },
    //artimgs: {},
    //id: this.props.location.state.id, <= this was for a pretty art detail url
    id: this.props.match.params.title,
    //arttag: this.props.location.state.arttag,
    loaded: false
  }
  
  async componentDidMount(){
    const HOSTSITE = 'http://www.behance.net/v2/projects',
          APIKEY = 'CWMNQhHpXBN1VHlUg7HBYScp7iyLQ29H',
          PROXY = 'https://powerful-fjord-17912.herokuapp.com';
    try{
      document.getElementById("AppTop").scrollIntoView();
      const result = await fetch(`${ PROXY }/${ HOSTSITE }/${ this.state.id }?api_key=${ APIKEY }`),
            artwork = await result.json();
            
      this.setState({ 
        artwork: artwork,
      });
      //console.log(this.state.artwork.project.name);
      
    } catch(e){
      console.log(e);
    }
  }
  
  //Hide loader when ArtPiece loaded and unpause slidein animations
  onLoaded = () => {
    this.setState({ loaded: true });
    this.image.classList.remove('img-loading');
    this.artTitleDesc.classList.remove('img-loading');
  };
  
  //When ArtDetail loaded independently, Home button will replace Back button, and this function will allow it to work 
  toHome = () => {
    window.location.assign('./');
  }
  
  render() {
    const { artwork, id } = this.state;
    let artName = artwork.project.name,
        artDesc = artwork.project.description,
        artColor = artwork.project.colors[0],
        artImg = artwork.project.modules[0].sizes.max_1240,
        artTags = artwork.project.fields.toString().toLowerCase().replace(' ','-').replace(',',' ');
        
        
    return (
      <ArtDetailStyled>
        { !this.state.loaded && 
          <PacLoader r={ artColor.r } g={ artColor.g } b={ artColor.b } /> 
        }
        {/* ref= is to allow for accessing the animation start/stop from js, i.e. onLoaded() */} 
        <a href={ artImg }><img ref={(img) => this.image = img } id={ id } src={ artImg } title={ artName } alt={ artName } className={ `img-loading ${ artTags }` } onLoad={ this.onLoaded } /></a>
        
        <ArtTitleStyled className='img-loading' ref={(ArtTitleStyled) => this.artTitleDesc = ArtTitleStyled}>
          <h4>{ artName }</h4>
          {/* dangerouslySetInnerHTML used to allow for apostrophe's and other html/numeric entities in the description to be rendered correctly */}
          <p dangerouslySetInnerHTML={{__html: `Brief: ${artDesc}` }}></p>
          
          { this.props.history.length > 1 &&
            <p><button onClick={this.props.history.goBack}>Back</button></p>
          }
          { this.props.history.length === 1 && 
            <p><button onClick={this.toHome}>Home</button></p>
          }
          
          
          
        </ArtTitleStyled>
      </ArtDetailStyled>
    );
  }
}

const ArtDetailStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 1em;
  margin: 0 auto;
  padding: 2em 0;
  max-width: 1080px;
  width: 80%;
  
  @media screen and (max-width: 640px){
      padding-top: 0;
      width: 100%
      grid-row: 1 / 2;
    }
  
  a{ grid-column: 1 / 9; grid-row: 1 / span 7; 
    
    @media screen and (max-width: 640px){
      grid-column: 1 / span 10;
      grid-row: 1 / 2;
    }
  }
  
  img{
    box-shadow: 1px 2px 2px rgba(0,0,0,.2);
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    grid-column: 1 / 9;
    grid-row: 1 / span 7;
    transform: translateX(-100px);
    animation: .5s forwards imgAppear;
    
    &.branding{ box-shadow: 0 0 0 !important; }
    
    
  }
  
  .img-loading{ animation-play-state: paused !important; }
  
  @keyframes imgAppear{
    from{ transform: translateX(-100px); opacity: 0; }
    to{ transform: translateX( 0px); opacity: 1; }
  }
`;

const ArtTitleStyled = styled.div`
  grid-column: 9 / 11;
  grid-row: 1 / 4;
  background-color: rgba(255,255,255,.75);
  box-shadow: 1px 2px 2px rgba(0,0,0,.2);
  padding: .5em;
  text-align: left;
  transform: translateX(100px);
  animation: .5s forwards titleAppear;
  
  button{ background-color: #198; border: 1px solid #198; border-radius: 4px; color: #fff; padding: .25em; text-decoration: none; }
  
  @media screen and (max-width: 640px){
    grid-column: 1 / span 10;
    grid-row: 11 / 12;
    text-align: center;
  }
  
  @keyframes titleAppear{
    from{ transform: translateX(100px); opacity: 0; }
    to{ transform: translateX( 0px); opacity: 1; }
  }
`;
