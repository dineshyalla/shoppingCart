import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Store'

const render = 
    <Store>
        <Router>
            <App/>
        </Router>
    </Store>

ReactDOM.render(render, document.getElementById('root'));


serviceWorker.unregister();
