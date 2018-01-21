import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import socket, { startSocket } from './middlewares/socket';
import FrontDoor from './layouts/FrontDoor/FrontDoor';
import app from './reducers/reducer';

const store = createStore(app, applyMiddleware(socket));
startSocket(store, 'http://localhost:3000');

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <FrontDoor/>
            </Provider>
        );
    }
}

export default App;
