import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={<h1>Hello from App.js Route tag</h1>}/>
        </Switch>
    </div>
)

export default App;
