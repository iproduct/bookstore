import axios from 'axios';
import React, { Component } from 'react';

class Books extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await axios.get('http://localhost:4000/users');
    console.log(books);
    debugger;
    // this.setState({ books });
  }

  render() {
    return (
      <div className="Books">
        lorem
      </div>
    );
  }
}

export default Books;