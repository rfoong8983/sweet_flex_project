import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './components/navbar/navbar_container';
import DashboardContainer from './components/search/dashboard_container';

const App = () => (
    <div className="appWrapper">
        <NavBarContainer />
        <Route exact path="/dashboard" component={DashboardContainer}/>
    </div>
)

export default App;
