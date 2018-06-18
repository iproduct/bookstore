import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import Books from './components/Books';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Aurora Bookstore</a>
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
                Books Router Test
                <span className="sr-only">(current)</span>
               </Link>
              <a className="nav-item nav-link active" href="#">
                Books
                <span className="sr-only">(current)</span>
               </a>

              <a className="nav-item nav-link" href="#">Readers</a>
              <a className="nav-item nav-link" href="#">Pricing</a>
              <a className="nav-item nav-link disabled" href="#">Disabled</a>
            </div>

            <ul className="navbar-nav ml-auto">
              <li>
                <a className="nav-item nav-link" href="#">
                  Login
                  <i className="fa fa-sign-in-alt"></i>
                </a>
               </li>
               <li>
                <a className="nav-item nav-link" href="#">
                  Logout
                  <i className="fa fa-sign-out-alt"></i>
                </a>

               </li>
               <li>
                <a className="nav-item nav-link" href="#">Profile</a>
               </li>
            </ul>
          </div>
        </nav>
        <div>
          <Route path="/books" component={Books}/>
        </div>
      </div>
    );
  }
}

export default App;
