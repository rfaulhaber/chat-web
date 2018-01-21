import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from '../../components/Message/Message';

class MessageView extends Component {
    render() {
        const messages = this.props.messages.map(message => <Message key={message.timestamp} {...message}/>);
        return (
            <div>
                {messages}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(MessageView);