import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        const {timestamp, text, from} = this.props;
        return(
            <div>
                 {from} {text} {timestamp.toLocaleString()} 
            </div>
        );
    };
}