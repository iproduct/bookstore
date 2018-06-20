import axios from 'axios';
import React, { Component } from 'react';

import UserService from '../services/UserService';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.state.user[e.target.name] = e.target.value;
    this.setState(this.state.user);
  }

  async register(evt) {
    evt.preventDefault();
    const user = await UserService.register(this.state.user);
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="Register">
        <div className="container col-md-4 col-md-offset-4 login-wrapper">
          <form className="form-login">
            <h2 className="form-login-heading">Register</h2>

            <div className="form-group">
              <input className="form-control"
                      value={this.state.user.email}
                      onChange={this.onChange}
                      placeholder="Email (Username)"
                      name="email"
                      required/>
            </div>

            <div className="form-group">
              <input className="form-control"
                     value={this.state.user.password}
                     onChange={this.onChange}
                     type="password"
                     name="password"
                     placeholder="Password"
                     required />
            </div>

            <div className="form-group">
              <input className="form-control"
                     value={this.state.user.repeatPassword}
                     onChange={this.onChange}
                     type="password"
                     name="repeatPassword"
                     placeholder="Repeat Password"
                     required />
            </div>

            <div className="form-group">
              <input className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      onChange={this.onChange}
                      value={this.state.user.firstName}/>
            </div>

            <div className="form-group">
              <input className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.user.lastName}
                      onChange={this.onChange}
                      required/>
            </div>

            <button className="btn btn-lg btn-primary btn-block register-btn"
                    onClick={this.register}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;