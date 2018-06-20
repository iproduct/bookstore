import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router';


import UserService from './services/UserService';
import Books from './components/Books';
import Readers from './components/Readers';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      redirectToLogin: false
    };

    this.logout = this.logout.bind(this);
   }

   async logout(evt) {
     evt.preventDefault();
     await UserService.logout();

     this.setState({
       current: {},
       redirectToLogin: true
     });
   }

  async componentDidMount() {
    const current = await UserService.getCurrent();
    this.setState({ current });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/books" className="navbar-brand">
            Bookstore
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/books" className="nav-item nav-link">
                <i class="fa fa-book"></i>&nbsp;
                Books
              </Link>
              <Link to="/readers" className="nav-item nav-link">
                <i class="fas fa-users"></i>&nbsp;
                Readers
              </Link>
            </div>

              {this.state.current && this.state.current.id ? (
                <ul className="navbar-nav ml-auto">
                  <li>
                    <Link to="/profile" className="nav-item nav-link">
                      <i class="fa fa-user-astronaut"></i>&nbsp;
                      {(this.state.current || {}).email}
                    </Link>
                  </li>
                  <li>
                    <a className="nav-item nav-link" onClick={this.logout} href="#">
                       <i className="fa fa-sign-out-alt"></i>&nbsp;
                       Logout
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li>
                    <Link to="/login" className="nav-item nav-link">
                      <i className="fa fa-sign-in-alt"></i>&nbsp;
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="nav-item nav-link">
                      <i class="fas fa-user-plus"></i>&nbsp;
                      Register
                    </Link>
                  </li>
                </ul>
              )}
          </div>
        </nav>
        <div>
          {this.state.redirectToLogin && (<Redirect to="/login" />)}
         </div>
        <div>
          <Route path="/profile" component={Profile}/>
          <Route path="/books" component={Books}/>
          <Route path="/login" component={Login}/>
          <Route path="/readers" component={Readers}/>
          <Route path="/register" component={Register}/>
        </div>
      </div>
    );
  }
}

export default App;
