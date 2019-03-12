import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions';
import './stylesheets/application.scss';
import {login, receiveCurrentUser} from './actions/session_actions';
// parse user's session token
import jwt_decode from 'jwt-decode';

// session utility funct to store / remove token in request header
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
// import { Session } from 'inspector';


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
<<<<<<< HEAD
    
=======
>>>>>>> splash_page

    // if a returning user has a stored session token
    if (localStorage.jwtToken) {

        // set token as a common header for axios requests
        setAuthToken(localStorage.jwtToken);

        // decode token to obtain the user's info
        const decodedUser = jwt_decode(localStorage.jwtToken);

<<<<<<< HEAD
        // create preconfigured state and add to store
        store.dispatch(receiveCurrentUser(decodedUser));
=======
        store.dispatch(receiveCurrentUser(decodedUser));

>>>>>>> splash_page
        const currentTime = Date.now() / 1000;
        // currentTime: time since Jan 1, 1970
        // exp: the time from which the webtoken should not be accepted
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
<<<<<<< HEAD
        } 
    }

    // take this out once connected with token above
    // store = configureStore({});
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
=======
        }
    }

>>>>>>> splash_page
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
