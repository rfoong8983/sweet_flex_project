import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// authentication routes will be rendered with this
const Auth = ({ component: Component, path, exact, loggedIn }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to= "/search" />
        )
    )} />
);

// protected routes will be rendered xwith this
const Protected = ({ component: Component, path, exact, loggedIn }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to= "/" />
        )
    )} />
)

// user isAuthenticated slice of state to determine loggedIn status
const msp = state => (
    {
        loggedIn: state.session.isAuthenticated
    }
)

export const Authroute = withRouter(connect(msp)(Auth));
export const Protectedroute = withRouter(connect(msp)(Protected));