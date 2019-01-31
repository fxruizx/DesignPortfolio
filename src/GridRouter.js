//!!GRID ROUTER IS NO LONGER NEEDED!!
//-----------------------------------

// GRID ROUTER COMPONENT USED BECAUSE GOING DIRECTLY FROM APP TO ARTGRID
// DOES NOT CAUSE RERENDER SO CAN'T GO BETWEEN DIFFERENT FILTERED GRIDS
import React, { Component } from 'react';
import{
  Route,
  Link,
  Switch
} from 'react-router-dom';
import ArtGrid  from './ArtGrid';

export default class GridRouter extends Component {
    
    render() {
        return (
            <div>
            <p>Filters: 
                <Link to="/filter/design"><strong>Design</strong></Link>
                <Link to="/filter/webdesign">Web Design</Link>
                <Link to="/filter/graphicdesign">Graphic Design</Link>
                <Link to="/filter/socialmedia">Social Media Design</Link> |  
                <Link to="/filter/pixelart"><strong>Pixel Art</strong></Link>
            </p>
            <Switch>
                <Route exact path="/" component={ ArtGrid } />
                {/*<Route path="/filter/:title" render={(props) => <ArtGrid {...props} filter="pixelart"/>} />*/}
                {/*<Route key=":tag" path="/filter/:tag" render={ ArtGrid }/>*/}
                {/*<Route 
                    exact
                    path="/filter/:tag"
                    render={props => <ArtGrid key={props.match.params.type || 'empty'}/>} 
                /> */}
                <Route exact path="/filter/:tag" render={(props) => <ArtGrid {...props} />}/>
            </Switch>
            </div>
        );
    }
}
