import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendMessage} from '../../actions/MessageActions';
import {connectIO} from '../../actions/IOActions';
import Message from '../../components/Message/Message';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: ''
        };

        props.connect('http://localhost:3000');
    }

    handleOnClick = () => {
        this.setState({messageText: ''});
        this.props.send(this.state.messageText);
    };

    handleOnChange = event => {
        this.setState({messageText: event.target.value});
    };

    render() {
        const messageView = this.props.messages.map(message => <Message key={message.timestamp} {...message}/>);
        return ( 
            <div>
                {messageView}
                <input type="text" onChange={this.handleOnChange} value={this.state.messageText}/>
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
        send: message => dispatch(sendMessage(message)),
        connect: url => dispatch(connectIO(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);