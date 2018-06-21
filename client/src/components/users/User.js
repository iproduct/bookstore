import axios from 'axios';
import React, { Component } from 'react';

import UserService from '../../services/UserService';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        genres: []
      }
    };
  }

  async componentDidMount() {
    // take current from api for now, optimize later
    const { id } = this.props.match.params;
    const user = await UserService.get(id);
    this.setState({ user });
  }

  render() {
    return (
      <div className="User">
        <div class="container">
          <h3 class="text-center screen-header">User Profile</h3>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <table class="table user-table">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>{(this.state.user || {}).firstName}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{(this.state.user || {}).lastName}</td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td>{(this.state.user || {}).email}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{(this.state.user || {}).email}</td>
                  </tr>
                  <tr>
                    <td>Genres</td>
                    <td>not in db for now, will add soon</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;