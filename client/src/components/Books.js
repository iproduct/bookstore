import axios from 'axios';
import React, { Component } from 'react';
import BooksService from '../services/BooksService';

class Books extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    // TODO: pagination if there's time
    const books = await BooksService.query();
    this.setState({ books });
  }

  render() {
    return (
      <div className="Books">
        Books
      </div>
    );
  }
}

export default Books;