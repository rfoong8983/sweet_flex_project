import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import NavBar from './navbar';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated
    }
);

const mdp = dispatch => (
    {
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout())
    }
);

export default connect(msp, mdp)(NavBar);