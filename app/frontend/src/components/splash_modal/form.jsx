import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={username:"", password:"", formType: "register", welcomeMessage:"Create an account"};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

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

    switchFormType(type) {
        return (e) => {
            e.preventDefault();

            this.setState({formType: type});
            if (type === 'login') {
                this.setState({ welcomeMessage: "Welcome back" });
            } else {
                this.setState({ welcomeMessage: "Create an account" });
            }
        };
    }

    renderFormType() {
        if (this.state.formType === 'register') {

            return (
                <div className="mod_buttonsWrapper">
                    <div className="mod_loginSignupWrapper">
                        <a className="mod_toLogin_link">Have an account? <span onClick={this.switchFormType('login')} className="mod_toLoginSpan">Sign-in</span></a>
                        <a className="mod_continue_link"><span className="mod_toLoginSpan">Continue without an account</span></a>

                    </div>

                    <button className="mod_signup_button" onClick={this.handleSignup}>Register</button>
                </div>
            )
        } else {
            return (
                <div className="mod_buttonsWrapper">
                    <div className="mod_loginSignupWrapper">
                        <a className="mod_toLogin_link">Need an account? <span onClick={this.switchFormType('register')} className="mod_toLoginSpan">Click here!</span></a>
                        <a className="mod_continue_link"><span className="mod_toLoginSpan">Continue without an account</span></a>

                    </div>

                    <button className="mod_signup_button" onClick={this.handleLogin}>Log In</button>
                </div>
            )
        }
    }

    render () {
        return (

            <div className="mod_formWrapper">
                <div className="mod_closeModal">
                    <button className="mod_closeModalButton" onClick={this.props.closeModal}>
                        <p>X</p>
                    </button>
                </div>
                <div className="mod_formInnerWrapper">
                        <h2 className="modalTitle">
                            {this.state.welcomeMessage}
                        </h2>
                        
                        <input
                            className="nb_userInput"
                            type="text"
                            placeholder="username"
                            onChange={this.handleUpdate('username')}
                        >
                        </input>

                        <input
                            className="nb_passInput"
                            type="password"
                            placeholder="password"
                            onChange={this.handleUpdate('password')}
                        >
                        </input>

                    {this.renderFormType()}
                    

                    
                    {/* <button className="mod_close_button"onClick={this.props.closeModal}>close modal</button> */}
                </div>
            </div>
        )
    }
}

export default Form;