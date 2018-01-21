import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../Main/Main';
import Auth from '../Auth/Auth';

class FrontDoor extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return <Main/>;
        } else {
            return <Auth/>
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isUserAuthenticated
    };
}

export default connect(mapStateToProps)(FrontDoor);