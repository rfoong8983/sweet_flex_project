import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { login, signup, logout } from '../../actions/session_actions';
import NavBar from './navbar';

const msp = state => (   
    {
        currentUser: state.session.currentUser,
        loggedIn: state.session.isAuthenticated
    }
);

const mdp = dispatch => (
    {
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    }
);

export default withRouter(connect(msp, mdp)(NavBar));