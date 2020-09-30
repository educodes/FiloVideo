import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';

const App = () => (
  <BrowserRouter>
    <Route exact path = "/" component = { Home } />
    <Route exact path = "/login" component = { Login } />
    <Route exact path="/register" component={Register}/>
  </BrowserRouter>
);

export default App;