import React, { Component } from 'react';
import './styles.css';

export default class Message extends Component {
    render() {
        const {timestamp, text, from} = this.props;
        return(
            <div>
                <b>{from}</b>: {text} {timestamp.toLocaleString()} 
            </div>
        );
    };
}