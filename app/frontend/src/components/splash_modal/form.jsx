import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"", 
            password:"", 
            formType: this.props.modal, 
            // welcomeMessage: {formType === "register" ? "Create an account"},
            userPlaceholder: true,
            passPlaceholder: true
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.renderUserPlaceholder = this.renderUserPlaceholder.bind(this);
        this.renderPassPlaceholder = this.renderPassPlaceholder.bind(this);
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(this.props.closeModal())
            .catch((err) => console.log(err));
    }

    handleSignup(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(this.props.closeModal())
            .catch((err) => console.log(err));
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
                        <a className="mod_continue_link"
                            onClick={this.props.closeModal}
                        ><span className="mod_toLoginSpan">Continue without an account</span></a>

                    </div>

                    <button className="mod_signup_button" onClick={this.handleSignup}>Register</button>
                </div>
            )
        } else {
            return (
                <div className="mod_buttonsWrapper">
                    <div className="mod_loginSignupWrapper">
                        <a className="mod_toLogin_link">Need an account? <span onClick={this.switchFormType('register')} className="mod_toLoginSpan">Click here!</span></a>
                        <a className="mod_continue_link"
                            onClick={this.props.closeModal}
                        ><span className="mod_toLoginSpan">Continue without an account</span></a>

                    </div>

                    <button className="mod_signup_button" onClick={this.handleLogin}>Log In</button>
                </div>
            )
        }
    }

    renderUserPlaceholder() {
        return (e) => {
            this.state.userPlaceholder ? this.setState({ userPlaceholder: false }) : this.setState({ userPlaceholder: true }) 
        }
    }

    renderPassPlaceholder() {
        return (e) => {
            this.state.passPlaceholder ? this.setState({ passPlaceholder: false }) : this.setState({ passPlaceholder: true }) 
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
                            {this.state.formType === "register" ? "Create an account" : "Welcome back!"}
                        </h2>
                        
                        <input
                            className="nb_userInput"
                            type="text"
                            placeholder={this.state.userPlaceholder ? "username" : ""}
                            onChange={this.handleUpdate('username')}
                            onFocus={this.renderUserPlaceholder()}
                            onBlur={this.renderUserPlaceholder()}
                        >
                        </input>

                        <input
                            className="nb_passInput"
                            type="password"
                            placeholder={this.state.passPlaceholder ? "password" : ""}
                            onChange={this.handleUpdate('password')}
                            onClick={this.renderPassPlaceholder()}
                            onBlur={this.renderPassPlaceholder()}
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