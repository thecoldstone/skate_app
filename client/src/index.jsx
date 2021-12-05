/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);