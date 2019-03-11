import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import NavBar from './navbar';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated,
        login: (user) => dispatchEvent(login(user)),
        signup: (user) => dispatchEvent(signup(user))
    }
);

export default connect(msp)(NavBar);