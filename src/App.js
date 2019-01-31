import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation';
//import GridRouter from './GridRouter';
import AboutPage from './AboutPage';
import ArtGrid  from './ArtGrid';
import ArtDetail from './ArtDetail';

import './App.css';

class App extends Component {
  
  render() {
    //console.log( this.state.portfolio );
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation></Navigation>
          </header>
          <Switch>
            <Route exact path="/" component={ ArtGrid } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/filter/:tag" component={ ArtGrid }/>
            <Route path="/:title" component={ ArtDetail } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
