import axios from 'axios';
import React, { Component } from 'react';

import UserService from '../../services/UserService';

class UserDetails extends Component {

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
      <div className="UserDetails">
        <div className="container">
          <h3 className="text-center screen-header">User Profile</h3>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <table className="table user-table">
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
                    <td>Bio</td>
                    <td>{(this.state.user || {}).bio}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="details-button-group">
             <button className="btn btn-info">
               <i className="fas fa-user-edit"></i>&nbsp;
               Edit
             </button>
           </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;