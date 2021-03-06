import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/splash_modal/modal';
import NavBarContainer from './components/navbar/navbar_container';
import Footer from './components/footer/footer';

import DashboardContainer from './components/dashboard/dashboard_container';
import ProfileContainer from './components/profile/profile_container';
import { Authroute, Protectedroute } from './util/route_util';
import SplashContainer from './components/splash/splash_container';


const App = () => (
    <div className="appWrapper">
      <Modal />
      <NavBarContainer />
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/dashboard" component={DashboardContainer}/>
      <Route exact path="/profile" component={ProfileContainer}/>
      {/* <Protectedroute exact path="/profile" component={ProfileContainer}/> */}
      <Footer />
    </div>
)

export default App;