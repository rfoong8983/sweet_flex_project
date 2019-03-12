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


    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
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
                            onChange={this.handleUpdate('search')}
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