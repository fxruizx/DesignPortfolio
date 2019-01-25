// GRID ROUTER COMPONENT USED BECAUSE GOING DIRECTLY FROM APP TO ARTGRID
// DOES NOT CAUSE RERENDER SO CAN'T GO BETWEEN DIFFERENT FILTERED GRIDS
import React, { Component } from 'react';
import{
  Route,
  Switch
} from 'react-router-dom';
import ArtGrid  from './ArtGrid';

export default class GridRouter extends Component {
    
    render() {
        return (
            <Switch>
                <Route exact key="home" path="/" component={ ArtGrid } />
                {/*<Route path="/filter/:title" render={(props) => <ArtGrid {...props} filter="pixelart"/>} />*/}
                <Route path="/filter/:tag" component={ ArtGrid }/>
            </Switch>
        );
    }
}
