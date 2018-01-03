import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        const {timestamp, text, from} = this.props;
        return(
            <div>
                {timestamp.toLocaleString()} {text} {from}
            </div>
        );
    };
}