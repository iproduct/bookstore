import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await axios.get('http://localhost:4000/users');
    this.setState({ books });
  }

  render() {
    return (
      <div className="Login">
        <div className="container col-md-4 col-md-offset-4 login-wrapper">
          <form className="form-login">
            <h2 className="form-login-heading">Please Sign In</h2>
            <div className="username-input-wrapper form-group">
              <input className="form-control"
                      placeholder="Username"
                      name="username"
                      required
                      autofocus />
            </div>
            <div className="form-group">
              <input className="form-control"
                     type="password"
                     name="password"
                     placeholder="Password"
                     required />
            </div>

            <button className="btn btn-lg btn-primary btn-block signin-btn">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;