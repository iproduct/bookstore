import axios from 'axios';
import React, { Component } from 'react';

import BooksService from '../../services/BooksService';

class BooksList extends Component {
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
      <div className="BooksList">
        <h3>Books</h3>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">cover</th>
                <th scope="col">title</th>
                <th scope="col">raiting</th>
                <th scope="col">pages</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">publisher</th>
                <th scope="col">raiting</th>
                <th scope="col">genre</th>

              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr>
                  <td scope="row">pic</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
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

export default BooksList;