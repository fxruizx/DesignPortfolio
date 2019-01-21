import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
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
            <Link className="App-link" to="/">FXR Design</Link>
          </header>
          <Switch>
            <Route exact path="/" component={ ArtGrid } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/:title" component={ ArtDetail } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
