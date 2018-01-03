import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Main from './layouts/Main/Main';
import app from './reducers/reducer';

const store = createStore(app);

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