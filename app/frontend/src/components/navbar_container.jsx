import { connect } from 'react-redux';

import NavBar from './navbar';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated
    }
);

export default connect(msp)(NavBar);