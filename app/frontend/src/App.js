import React from 'react';
import { Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import Modal from './components/splash_modal/modal';
import NavBarContainer from './components/navbar/navbar_container';
import SplashContainer from './components/splash/splash_container';

const App = () => (
    <div className="appWrapper">
        <Modal />
        <NavBarContainer />
        <Route exact path="/" component={SplashContainer} />
    </div>
)

export default App;