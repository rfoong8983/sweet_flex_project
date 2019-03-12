import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated
    }
);

const mdp = dispatch => (
    {
        openModal: (formType) => dispatch(openModal(formType)),
        closeModal: () => dispatch(closeModal())
    }
);

export default withRouter(connect(msp, mdp)(Splash));