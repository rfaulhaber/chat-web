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
    };

    componentDidMount() {
        this.focusTextInput();
    }

    handleOnClick = () => {
        this.setState({text: ''});
        this.props.send(this.state.text);
    };

    handleOnChange = event => {
        this.setState({text: event.target.value});
    };

    hanldeOnKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleOnClick();
        } else {
            this.handleOnChange(event);
        }
    };

    focusTextInput = () => {
        this.textInput.focus();
    };

    render() {
        return (
            <div className="input-area">
                <input 
                    type="text" 
                    className="input" 
                    onChange={this.handleOnChange} 
                    onKeyPress={this.hanldeOnKeyPress} 
                    value={this.state.text}
                    ref={input => {this.textInput = input;}}
                />
                <button className="input-button" onClick={this.handleOnClick}>Send</button>
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