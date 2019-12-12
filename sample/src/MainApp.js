import React from 'react';
import App from './App.js';
import { Provider } from 'react-redux';
import {store} from "./helpers/Store";


export default class MainApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
