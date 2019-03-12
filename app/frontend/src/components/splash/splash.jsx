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
            <div className="hero_mainWrapper">
                <div className="hero_contentWrapper">

                    <div className="hero_heroWrapper">
                        <div className="hero_sloganWrapper">
                            <p className="hero_slogan">
                                Impress your friends with this nifty
                            </p>
                            <p className="hero_slogan2">
                                hashtag analyzer
                            </p>
                        </div>

                        <div className="hero_modalButtonWrapper">
                            <button className="hero_modalButton" onClick={this.handleSubmit}>Create an account</button>
                            {/* // if user is logged in */}
                            {/* // redirect to search in handleSubmit */}
                            {/* <button onClick={this.props.closeModal}>Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;