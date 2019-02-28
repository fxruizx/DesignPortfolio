import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import ArtGrid  from './ArtGrid';
import ArtDetail from './ArtDetail';
import BackToTop from './BackToTop';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App" id="AppTop">
          <MetaTags>
            <title>Portfolio of Francisco X. Ruiz</title>
            <link rel="canonical" href="http://fxrdesign.com" />
            <meta name="description" content="Francisco X. Ruiz is a web/graphic designer, pixel artist, and podcaster. This is the portfolio of his creative work. To see the portfolio of his development work, go to https://github.com/fxruizx" />
          </MetaTags>
          <header className="App-header">
            <Navigation></Navigation>
          </header>
          <Switch>
            <Route exact path="/" component={ ArtGrid } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/filter/:tag" component={ ArtGrid }/>
            <Route path="/:title" component={ ArtDetail } />
          </Switch>
          <BackToTop/>
        </div>
      </Router>
    );
  }
}

export default App;
