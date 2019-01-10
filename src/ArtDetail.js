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
      </ArtDetailStyled>
    );
  }
}

const ArtDetailStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 1rem;
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem 0;
  width: 100%;
  
  img{
    max-width: 100%;
    height: auto;
  }
`;
