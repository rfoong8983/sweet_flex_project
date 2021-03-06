import React from 'react';
// import logo from '../images/sweet.png';
// import { Redirect } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    const currentUser = this.props.currentUser;
    
    this.state = {
      username: currentUser ? currentUser.username : "",
      password: currentUser ? currentUser.password : "",
      search: ""
    };  
    this.handleLogout = this.handleLogout.bind(this); 
    this.pushToProfile = this.pushToProfile.bind(this);
    this.toHome = this.toHome.bind(this);  
    this.openModal = this.openModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    let currentUser = this.props.currentUser;
    currentUser ? this.setState({ username: currentUser.username, password: currentUser.password }) : currentUser = undefined;
  }

  handleUpdate(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    if (this.props.history !== '/') this.props.history.push('/');
  }

  pushToProfile(e) {
    e.preventDefault();
    this.props.history.push('/profile');
  }
        
  toHome() {
    return (e) => {
      this.props.history.push("/");
    };
  }
      
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      // console.log(this.state.search);
      this.props.search(this.state.search);
      // this.setState({search: ""});
      if (this.props.location.pathname !== '/dashboard') {
        this.props.history.push('/dashboard');
      }
      this.props.toggleLoader(true);
      // if (this.props.location.pathname === '/dashboard') {
      //   window.location.reload();
      // } else {
      //   this.props.history.push('/dashboard');
      // }
      
    }
  }


  openModal(e) {
    e.preventDefault();
    this.props.openModal('form');

  }

  render () {
    return (

      <div className ="navbar-main-container-wrap">
        <div className="navbar-container-wrap flex-center-row">
          <div className="navbar-container flex-center-spread">
          <div className="navbar-logo flex-left-row">
            <h1 className="navbar-logo-h1" onClick={this.toHome()}>sweet</h1>
          </div>
          <input 
              className="navbar-search"
              onChange={this.handleUpdate('search')}
              onKeyPress={this.handleKeyPress}
              placeholder="#sweeeeet">
          </input>
          <div className="navbar-buttons flex-right-row">
            <div className="profile flex-center">
            <a href="#" className="navbar-button-style" 
              onClick={this.props.currentUser.username ? this.pushToProfile : this.handleLogout}>
              {this.props.currentUser ? 
              <div className="navbar-buttons-style">
                <div href="#" className="navbar-button-style">
                {this.props.currentUser.username}
                </div>
              </div> :""}
            </a>
            </div>

            {this.props.currentUser.username ?
            <div className="logout flex-center">
              <a href="#" className="navbar-button-style" onClick={this.handleLogout}>LOGOUT</a>
            </div> : 
            <div className="logout flex-center">
              <a href="#" className="navbar-button-style" onClick={this.openModal}>LOGIN</a>
            </div>}

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;