import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import UserService from './services/UserService';

import Home from './components/Home';
import BooksList from './components/books/BooksList';
import BookDetails from './components/books/BookDetails';
import UsersList from './components/users/UsersList';
import UserDetails from './components/users/UserDetails';
import Basket from './components/users/Basket';
import EditProfile from './components/users/EditProfile';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
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
    console.log(this.props);
    debugger;
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
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
              {this.state.current && this.state.current.id && (
                <div className="navbar-nav">
                  <Link to="/books" className="nav-item nav-link">
                    <i className="fa fa-book"></i>&nbsp;
                    Books
                  </Link>
                  <Link to="/users" className="nav-item nav-link">
                    <i className="fa fa-users"></i>&nbsp;
                    Users
                  </Link>
                </div>
              )}

              {this.state.current && this.state.current.id ? (
                <ul className="navbar-nav ml-auto">
                  <li>
                    <Link to={'/users/'+ this.state.current.id } className="nav-item nav-link">
                      <i className="fa fa-user-astronaut"></i>&nbsp;
                      {(this.state.current || {}).firstName} {(this.state.current || {}).lastName}
                    </Link>
                  </li>
                  <li>
                    <Link to="/basket" className="nav-item nav-link">
                      <i class="fa fa-shopping-basket"></i>&nbsp;
                      Basket
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
                      <i className="fa fa-user-plus"></i>&nbsp;
                      Register
                    </Link>
                  </li>
                </ul>
              )}
          </div>
        </nav>
        <div>
          { this.state.redirectToLogin && (<Redirect to="/login" />) }
         </div>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/edit_profile" component={EditProfile}/>
          <Route exact path="/books" component={BooksList}/>
          <Route exact path="/books/:id" component={BookDetails}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/users" component={UsersList}/>
          <Route exact path="/users/:id" component={UserDetails} current={this.state.current} />
          <Route exact path="/basket" component={Basket}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </div>
    );
  }
}

export default App;
