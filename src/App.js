import React, { Component } from 'react';
import ArtPiece  from './ArtPiece';
import './App.css';

class App extends Component {
  
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
    console.log( this.state.portfolio );
    return (
      <div className="App">
        <header className="App-header">
          FXR
        </header>
        <section>
          { this.state.portfolio.length < 1 &&
            <p>loading...</p>
          }
          
          { this.state.portfolio.map((item) => (
            <ArtPiece key={ item.guid._text } title={ item.title._text }/>
            ) 
          )}
          
        </section>
      </div>
    );
  }
}

export default App;
