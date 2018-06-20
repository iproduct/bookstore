import axios from 'axios';
import React, { Component } from 'react';

import UserService from '../services/UserService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async login(evt) {
    evt.preventDefault();
    const user = await UserService.login(this.state.user);
    console.log(user);
    debugger;
    const current = await UserService.getCurrent();
    console.log(current);
    debugger;
  }


  onChange(e) {
    this.state.user[e.target.name] = e.target.value;
    this.setState(this.state.user);
  }

  async componentDidMount() {}

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
                      value={this.state.user.username}
                      onChange={this.onChange}
                      required
                      autofocus />
            </div>
            <div className="form-group">
              <input className="form-control"
                     type="password"
                     name="password"
                     value={this.state.user.password}
                      onChange={this.onChange}
                     placeholder="Password"
                     required />
            </div>

            <button className="btn btn-lg btn-primary btn-block signin-btn"
                    onClick={this.login}>
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