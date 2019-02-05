import React, { Component } from 'react';
import styled from 'styled-components';
import ArtPiece from './ArtPiece';

export default class ArtDetail extends Component {
  
  state = {
    title: '',
    desc: '',
    imgsrc: '',
    arttag: ''
  }
  
  componentDidMount(){
    this.setState({
      title: this.props.location.state.title,
      desc: this.props.location.state.desc,
      imgsrc: this.props.location.state.imgsrc,
      arttag: this.props.location.state.arttag
    });
    
  }
  
  render() {
    //const { title, imgsrc } = this.state;
    const { title, desc, imgsrc, arttag } = this.state;
    console.log("arttags: "+ arttag);
    return (
      <ArtDetailStyled>
        <ArtPiece arttag={ arttag } title={ title } image={ imgsrc } />
        <ArtTitleStyled>
          <h4>{ title }</h4>
          {/* dangerouslySetInnerHTML used to allow for apostrophe's and other html/numeric entities in the description to be rendered correctly */}
          <p dangerouslySetInnerHTML={{__html: desc}}></p>
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
  max-width: 800px;
  padding: 2em 0;
  max-width: 1080px;
  width: 80%;
  
  img{
    max-width: 100%;
    height: auto;
    grid-column: 1 / 9;
    grid-row: 1 / span 7;
    transform: translateX(-100px);
    animation: .5s forwards imgAppear;
    
    @media screen and (max-width: 640px){
      grid-column: 1 / span 10;
      grid-row: 1 / 2;
    }
  }
  
  @keyframes imgAppear{
    from{ transform: translateX(-100px); opacity: 0; }
    to{ transform: translateX( 0px); opacity: 1; }
  }
`;

const ArtTitleStyled = styled.div`
  grid-column: 9 / 11;
  grid-row: 5 / 8;
  background-color: rgba(255,255,255,.75);
  box-shadow: 1px 2px 2px rgba(0,0,0,.2);
  padding: .5em;
  text-align: left;
  transform: translateX(100px);
  animation: .5s forwards titleAppear;
  
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
