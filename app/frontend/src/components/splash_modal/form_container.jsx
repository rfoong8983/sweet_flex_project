import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, signup } from '../../actions/session_actions';
import Form from './form';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated
    }
);

const mdp = dispatch => (
    {
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType) => dispatch(openModal(formType))
    }
);

export default withRouter(connect(msp, mdp)(Form));