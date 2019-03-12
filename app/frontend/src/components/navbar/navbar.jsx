import React from 'react';
// import logo from '../images/sweet.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};   
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);  
        this.handleLogout = this.handleLogout.bind(this);   
    }

    handleUpdate(field) {
        // debugger
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     if (this.props.formType === 'login') {
    //         this.props.login(this.state);
    //     } else {
    //         this.props.signup(this.state);
    //     }
    // }

    handleLogin(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    handleSignup(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        return (
            <div className="nb_mainWrapper">
                <nav className="nb_innerWrapper">
                    <div className="nb_logoWrapper">
                        {/* <img className="nb_logo" src={logo} alt="logo"></img> */}
                        <div className="nb_logo">sweet</div>
                    </div>

                    <div className="nb_linkWrapper">
                        <label className="nb_userLabel">
                            login
                            <input 
                                className="nb_userInput"
                                type="text"
                                placeholder="username"
                                onChange={this.handleUpdate('username')}
                            >
                            </input>
                        </label>

                        <label className="nb_passLabel">
                            password
                            <input 
                                className="nb_passInput"
                                type="password"
                                placeholder="password"
                                onChange={this.handleUpdate('username')}
                            >
                            </input>
                        </label>

                        <button onClick={this.handleLogin}>login</button>

                        <br></br><br></br>

                        <label className="nb_userLabel">
                            login
                            <input
                                className="nb_userInput"
                                type="text"
                                placeholder="username"
                                onChange={this.handleUpdate('username')}
                            >
                            </input>
                        </label>

                        <label className="nb_passLabel">
                            password
                            <input
                                className="nb_passInput"
                                type="password"
                                placeholder="password"
                                onChange={this.handleUpdate('password')}
                            >
                            </input>
                        </label>

                        <button onClick={this.handleSignup}>signup</button>
                        <button onClick={this.handleLogout}>log me out</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;