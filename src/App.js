import React, { Component } from 'react';
import logo from './logo.svg';
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
      //console.log(artworkJSON);
    } catch(e){
      console.log(e);
    }
  }
  
  
  
  
  render() {
    console.log("obJECT " +  this.state.portfolio );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
          { this.state.portfolio.map((item) => {
            return(
              <div key={ item.guid._text }>{ item.title._text }</div>
            )
          }) }
        </section>
      </div>
    );
  }
}

export default App;
