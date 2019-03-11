import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './components/navbar_container';
import NavBar from './components/navbar';
import ProfileContainer from './components/profile_container'
import {Authroute, Protectedroute} from './util/route_util';

const App = () => (
    <div className="appWrapper">
      <NavBarContainer />
        <Switch>  
          <Authroute exact path="/profile" component={ProfileContainer}/>
        </Switch>
    </div>
)

export default App;
