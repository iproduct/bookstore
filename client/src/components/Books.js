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
        <h3>Books</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed expedita nam quidem, consequatur, eius eos nihil quam itaque consectetur distinctio architecto cum esse, impedit quibusdam cupiditate delectus magnam molestias porro.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore adipisci, optio iste dolorum eligendi facere totam. Voluptas dicta tempora, illum, quo provident maiores qui, deleniti laborum perspiciatis voluptate aliquid veniam.
      </div>
    );
  }
}

export default Books;