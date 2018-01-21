import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authenticate} from '../../actions/AuthActions';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: '',
            password: ''
        };
    }

    onSkip = () => {
        this.props.authenticate();
    };

    onSubmit = () => {
        this.props.authenticate(this.state.userID, this.state.password);
    };

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <p>The server assigned you the id {this.props.serverID}</p>
                <p>If you would like to provide a username and save it, fill out the following fields.</p>
                <p>Otherise, click "skip" to proceed anonymously.</p>

                <div>
                    <label htmlFor="userID">User ID</label>
                    <input type="text" id="userID" onChange={this.handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleInputChange}/>
                </div>

                <div>
                    <button onClick={this.onSubmit}>Submit</button>
                    <button onClick={this.onSkip}>Skip</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverID: state.serverID
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (userID, password) => dispatch(authenticate(userID, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
