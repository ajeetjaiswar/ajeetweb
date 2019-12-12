import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/font-icon/font-icons.css'
import './assets/stylesheet/style.scss';
import * as serviceWorker from './serviceWorker';
import MainApp from "./MainApp";
import EnvConstants from './constants/envConstants';

switch (process.env.REACT_APP_ENV) {
    case EnvConstants.prod:
    case EnvConstants.production:
    case EnvConstants.stag:
    case EnvConstants.staging:
        if (typeof window !== "undefined") {
            if (window.atatus) {
                window.atatus.config('4ffab4ed152a45168c2de30b0bc7c3f5').install();
            }
        }
        break;
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
