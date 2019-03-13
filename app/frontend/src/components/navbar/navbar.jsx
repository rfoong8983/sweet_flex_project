import React from 'react';
// import logo from '../images/sweet.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: "", search: ""};  
        this.handleLogout = this.handleLogout.bind(this);   
    }

    handleUpdate(field) {
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

    // sjfkla;fjlsdaf
    // asdf ds

    // adsfsdaf
    // sadfasdfsa

    //asdfadsf
    //sadfasdf


    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        return (
          <div>
            <div className="navbar-container-wrap flex-center-row">
              <div className="navbar-container flex-center-spread">
                <div className="navbar-logo flex-left-row">
                  <h1>sweet</h1>
                </div>
                <input 
                      className="navbar-search"
                      onChange={this.handleUpdate('search')}
                      placeholder="search a #hashtag">
                </input>
                <div className="navbar-buttons flex-right-row">
                  <div className="profile flex-center">
                    <a href="" className="navbar-button-style" 
                      onClick={this.handleLogout}>
                      {this.props.currentUser ? 
                        <div className="navbar-buttons-style">
                          <a href="" className="navbar-button-style">
                            {this.props.currentUser.username}
                          </a>
                        </div> :""}
                    </a>
                  </div>
                  <div className="logout flex-center">
                    <a href="" className="navbar-button-style" onClick={this.handleLogout}>LOGOUT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default NavBar;