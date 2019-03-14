import React from 'react';
// import logo from '../images/sweet.png';
import { Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: "", search: ""};  
        this.handleLogout = this.handleLogout.bind(this);   
        this.handleKeyPress = this.handleKeyPress.bind(this);   
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.search(this.state.search);
            this.setState({search: ""});
            if (this.props.location.pathname === '/dashboard') {
              window.location.reload();
            } else {
              this.props.history.push('/dashboard');
            }
        }
    }

    render () {
        return (
            <div className="nb_mainWrapper">
                <nav className="nb_innerWrapper">
                    <div className="nb_logoWrapper">
                        <div className="nb_logo">sweet</div>
                    </div>

                    <div className="nb_searchWrapper">
                        <input 
                            className="nb_searchBar"
                            value={this.state.search}
                            onChange={this.handleUpdate('search')}
                            onKeyPress={this.handleKeyPress}
                            placeholder="#sweet"
                        >
                        </input>
                    </div>

                    <div className="nb_linkWrapper">
                        {this.props.currentUser ? 
                            <div className="nb_userProfileWrapper"><a href="" className="nb_userProfileLink">{this.props.currentUser.username}</a></div> :
                            "remove this later"
                        }
                        <div className="nb_userLogoutWrapper">
                            <a href="" className="nb_logoutLink" onClick={this.handleLogout}>Logout</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;