import axios from 'axios';
import React, { Component } from 'react';

class Profile extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await axios.get('http://localhost:4000/users');
    this.setState({ books });
  }

  render() {
    return (
      <div className="profile">
        <div class="container">
          <h3 class="text-center screen-header">User Profile</h3>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <table class="table user-table">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>lorem</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>lorem</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>lorem@abv.bg</td>
                  </tr>
                  <tr>
                    <td>Last login from</td>
                    <td>lorem</td>
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

export default Profile;