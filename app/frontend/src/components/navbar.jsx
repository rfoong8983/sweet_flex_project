import React from 'react';
// import logo from '../images/sweet.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => {

        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login
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
                        <label className="nb_userLabel">
                            login
                            <input 
                                className="nb_userInput"
                                type="text"
                                placeholder="login"
                            >
                            </input>
                        </label>

                        <label className="nb_passLabel">
                            password
                            <input 
                                className="nb_passInput"
                                type="password"
                                placeholder="password"
                            >
                            </input>
                        </label>

                        <button onClick={this.handleSubmit}>login</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;