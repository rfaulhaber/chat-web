import React, { Component } from 'react';
import './styles.css';

export default class Message extends Component {
    render() {
        const {timestamp, text, from, alias} = this.props;
        return(
            <div>
                <b>{alias || from}</b>: {text} {timestamp.toLocaleString()} 
            </div>
        );
    };
}