import React, { Component } from 'react';
import styled from 'styled-components';
import ArtPiece from './ArtPiece';

export default class ArtDetail extends Component {
  
  state = {
    title: '',
    imgsrc: ''
  }
  
  componentDidMount(){
    this.setState({
      title: this.props.location.state.title,
      imgsrc: this.props.location.state.imgsrc
    });
  }
  
  render() {
    //const { title, imgsrc } = this.state;
    const { title, imgsrc } = this.state;
    return (
      <ArtDetailStyled>
        <ArtPiece key={ title } title={ title } image={ imgsrc } />
        <ArtTitleStyled>{ title }</ArtTitleStyled>
      </ArtDetailStyled>
    );
  }
}

const ArtDetailStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin: 0 auto;
  max-width: 800px;
  padding: 2em 0;
  width: 94%;
  
  img{
    max-width: 100%;
    height: auto;
    grid-column: 1 / 10;
    grid-row: 1 / span 10;
    
    @media screen and (max-width: 640px){
      grid-column: 1 / span 10;
      grid-row: 1 / 2;
    }
  }
`;

const ArtTitleStyled = styled.div`
  grid-column: 9 / 11;
  grid-row: 9 / 10;
  background-color: rgba(255,255,255,.75);
  padding: .5em;
  text-align: left;
  
  @media screen and (max-width: 640px){
    grid-column: 1 / span 10;
    grid-row: 11 / 12;
    text-align: center;
  }
  
`;
