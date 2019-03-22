import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App/index.jsx';
import Signup from './Signup/index.jsx';
import Login from './Login/index.jsx';
import Feed from './Feed/index.jsx';
import Posts from './Posts/index.jsx';
import Dashboard from './Dashboard/index.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/photos" component={Feed}></Route>
      <Route path="/posts" component={Posts}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </Router>
), document.getElementById('app'));
