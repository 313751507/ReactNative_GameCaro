import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';

export default class MainIndex extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
