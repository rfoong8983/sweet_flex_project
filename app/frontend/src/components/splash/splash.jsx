import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.loggedIn) {
            // this.props.history.push("/search");
            // remove openModal and send to search
            this.props.openModal('form');
        } else {
            this.props.openModal('form');
        }
    }

    render () {
        return (
          <div>
            <div className="hero-container-wrap flex-center-col">
              <div className="hero-container flex-left-col-spread">
                <div className="hero-text">
                  <h1> Impress your friends with this nifty hashtag analyzer</h1>
                </div>
                <button className="sign-up-button" onClick={this.handleSubmit}>Create an Account</button>
              </div>
            </div>
          </div>
        )
    }
}

export default Splash;
