import React, { Component } from 'react';
import ArtGrid  from './ArtGrid';
import './App.css';

class App extends Component {
  
  render() {
    //console.log( this.state.portfolio );
    return (
      <div className="App">
        <header className="App-header">
          FXR
        </header>
        <ArtGrid />
      </div>
    );
  }
}

export default App;
