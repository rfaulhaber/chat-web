import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBox from '../../components/MessageBox/MessageBox';
import MessageView from '../../components/MessageView/MessageView';

class Main extends Component {
    render() {
        return ( 
            <div>
                <MessageView/>
                <MessageBox/>
            </div>
        );
    }
}

export default connect()(Main);