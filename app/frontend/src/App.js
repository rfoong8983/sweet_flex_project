import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './components/navbar_container';

const App = () => (
    <div className="appWrapper">
        <Switch>
            <Route path="/" 
                component={NavBarContainer}
            />
        </Switch>
    </div>
)

export default App;
