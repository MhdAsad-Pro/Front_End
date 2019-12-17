/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */



import React from 'react';
import ReactDOM from 'react-dom';

// Import root app
import App from 'containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/css/all.min.css';

ReactDOM.render(<App />, document.getElementById('app'));
