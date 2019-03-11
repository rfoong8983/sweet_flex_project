import React from 'react';
// import logo from '../images/sweet.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="nb_mainWrapper">
                <nav className="nb_innerWrapper">
                    <div className="nb_logoWrapper">
                        {/* <img className="nb_logo" src={logo} alt="logo"></img> */}
                        <div className="nb_logo"></div>
                    </div>

                    <div className="nb_linkWrapper">
                        loggedIn ? profile/signout : search?
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;