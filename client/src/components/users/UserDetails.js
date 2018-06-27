import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import UserService from '../../services/UserService';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    width                 :'60%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      editedUser: {},
      modalIsOpen: false
    };

    this.save = this.save.bind(this);
    this.openEditUserModal = this.openEditUserModal.bind(this);
    this.closeEditUserModal = this.closeEditUserModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async save() {
    await UserService.updateProfile(this.state.editedUser);
    this.setState({
      user: Object.assign({}, this.state.editedUser)
    });

    this.closeEditUserModal();
  }

  openEditUserModal() {
    this.setState({
      modalIsOpen: true,
      editedUser: Object.assign({}, this.state.user)
    });
  }

  closeEditUserModal() {
    this.setState({
      modalIsOpen: false,
      editedUser: {}
    });
  }

  onChange(e) {
    this.state.editedUser[e.target.name] = e.target.value;
    this.setState(this.state.editedUser);
  }


  async componentDidMount() {
    // take current from api for now, optimize later
    console.log(this.props);
    debugger;
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
                    <td>{(this.state.user || {}).username}</td>
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
             <button className="btn btn-info" onClick={this.openEditUserModal}>
               <i className="fa fa-user-edit"></i>&nbsp;
               Edit
             </button>
           </div>

           <Modal isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeEditUserModal}
                   style={customStyles}
                   contentLabel="Book Modal">
              <h2 ref={subtitle => this.subtitle = subtitle}>Edit your Profile</h2>
              <form className="form-add-book">
                <div className="form-group">
                  <input className="form-control"
                         value={this.state.editedUser.email}
                         onChange={this.onChange}
                         name="email"
                         placeholder="Email"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.editedUser.firstName}
                         onChange={this.onChange}
                         name="firstName"
                         placeholder="First Name"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.editedUser.lastName}
                         onChange={this.onChange}
                         name="lastName"
                         placeholder="Last Name"/>
                </div>

                <div className="form-group">
                  <textarea className="form-control"
                         value={this.state.editedUser.bio}
                         onChange={this.onChange}
                         name="bio"
                         placeholder="Bio" />
                </div>
              </form>

              <div className="details-button-group">
                <button className="btn btn-success" onClick={this.save}>
                  <i class="fa fa-save"></i>&nbsp;
                  Save
                </button>

                <button className="btn btn-info" onClick={this.closeEditUserModal}>
                  <i class="fa fa-times"></i>&nbsp;
                  Cancel
                </button>
              </div>
            </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(UserDetails);