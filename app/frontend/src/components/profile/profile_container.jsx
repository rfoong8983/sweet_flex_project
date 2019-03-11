import { connect } from 'react-redux';

import Profile from './profile';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.currentUser
    }
);

export default connect(msp)(Profile);