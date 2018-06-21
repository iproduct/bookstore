import axios from 'axios';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';

class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const users = await UserService.query();
    this.setState({ users });
  }

  render() {
    return (
      <div className="UsersList">
        <h3>Users</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Bio</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr>
                  <td>
                    <img src="https://cdn2.iconfinder.com/data/icons/flaturici-set-4/512/user-512.png"
                         width="60" height="60"/>
                  </td>

                  <td>
                    <Link to={'/users/'+user.id }>
                      {user.username}
                    </Link>
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.bio}</td>
                </tr>
               )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersList;