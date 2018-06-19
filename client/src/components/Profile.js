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
      <div className="Profile">
        <h5 class="mb-3">User Profile</h5>
        <table class="table">
          <thead>

          </thead>
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Age</th>
              <td>123</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;