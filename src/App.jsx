import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import socket from './middlewares/socket';
import Main from './layouts/Main/Main';
import app from './reducers/reducer';

const store = createStore(app, applyMiddleware(socket));

export class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

export default App;