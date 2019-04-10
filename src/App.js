import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Components/login/login";



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>









          
          <Route path="/login/" component={Login} />
          
        </div>
      </Router>
    );
  }    
}

export default App;
