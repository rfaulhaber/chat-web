import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendMessage} from '../../actions/MessageActions';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: ''
        };
    }

    handleOnClick = () => {
        this.props.send(this.state.messageText);
    };

    handleOnChange = event => {
        this.setState({messageText: event.target.value});
    };

    render() {
        const messageView = this.props.messages.map(message => <div key={message.timestamp}>{message.timestamp} {message.text}</div>);
        return ( 
            <div>
                {messageView}
                <input type="text" onChange={this.handleOnChange}/>
                <button onClick={this.handleOnClick} >Send</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        send: message => dispatch(sendMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);