import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../../components/Message/Message';
import MessageBox from '../../components/MessageBox/MessageBox';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: ''
        };
    }

    render() {
        const messageView = this.props.messages.map(message => <Message key={message.timestamp} {...message}/>);
        return ( 
            <div>
                {messageView}
                <MessageBox/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(Main);