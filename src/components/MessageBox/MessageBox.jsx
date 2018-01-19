import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../../actions/MessageActions';
import './styles.css';

class MessageBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleOnClick = () => {
        this.setState({text: ''});
        this.props.send(this.state.text);
    };

    handleOnChange = event => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <div className="input">
                <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
                <button onClick={this.handleOnClick}>Send</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        send: message => dispatch(sendMessage(message)),
    };
};

export default connect(null, mapDispatchToProps)(MessageBox);