import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, signup, logout } from '../../actions/session_actions';
import { receiveSearch } from '../../actions/search_actions'
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

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
        closeModal: () => dispatch(closeModal()),
        search: (searchData) => dispatch(receiveSearch(searchData))
    }
);

export default withRouter(connect(msp, mdp)(NavBar));