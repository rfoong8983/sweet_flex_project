import { connect } from 'react-redux';

import Profile from './profile';

const msp = state => (
    {
        loggedIn: state.session.isAuthenticated,
        user: state.session.currentUser
    }
);

export default connect(msp)(Profile);