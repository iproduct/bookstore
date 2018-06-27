import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="Home">
        <h1>
          Welcome to Aurora bookstore.
        </h1>
        <h3>
          Here you can find your favorite books and purhase.
        </h3>
      </div>
    );
  }
}

export default Login;