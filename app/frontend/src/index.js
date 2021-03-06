import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/store';
import './stylesheets/application.scss';
import { login, receiveCurrentUser } from './actions/session_actions';
// parse user's session token
import jwt_decode from 'jwt-decode';

// session utility funct to store / remove token in request header
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
// import { fetchTwitterData } from '../src/util/twitter_api_util';
import { fetchTwitterData, fetchWatsonData, receiveSearch, saveSearchData } from '../src/actions/search_actions';
// import { Session } from 'inspector';


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    
    // if a returning user has a stored session token
    if (localStorage.jwtToken) {

        // set token as a common header for axios requests
        setAuthToken(localStorage.jwtToken);

        // decode token to obtain the user's info
        const decodedUser = jwt_decode(localStorage.jwtToken);

        // create preconfigured state and add to store
        store.dispatch(receiveCurrentUser(decodedUser));
        const currentTime = Date.now() / 1000;
        // currentTime: time since Jan 1, 1970
        // exp: the time from which the webtoken should not be accepted
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        } 
    }

    // API testing
    window.saveSearchData = saveSearchData;
    window.getState = store.getState;
    window.dispatch = store.dispatch;


    // store = configureStore({});
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
    window.fetchTwitterData = fetchTwitterData;
    window.fetchWatsonData = fetchWatsonData;
    window.receiveSearch = receiveSearch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
