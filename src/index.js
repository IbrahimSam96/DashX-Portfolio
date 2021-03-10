import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// StyleSheet
import "./Ayr.css";

//Router
import {BrowserRouter as Router } from "react-router-dom"; 

ReactDOM.render(
<React.StrictMode>
<Router>
<App />
</Router>
</React.StrictMode>, document.getElementById('root')

);
