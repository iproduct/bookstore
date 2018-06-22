import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserService from '../../services/UserService';
import BasketService from '../../services/BasketService';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.removeBookFromBasket = this.removeBookFromBasket.bind(this);
  }

  async removeBookFromBasket(book) {
    const items = this.state.items.filter(item => item.id !== book.id);
    await BasketService.removeBookFromBasket(book.id);
    this.setState({ items });
  }

  async componentDidMount() {
    const items = await UserService.getBasket();
    this.setState({ items });
  }

  render() {
    return (
      <div className="Basket">
        <h3>Basket Items</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cover</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Rating</th>
                <th scope="col">Pages</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Publisher</th>
                <th scope="col">Genre</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((book) => (
                <tr>
                  <td>
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394340655i/1931116._SX120_.jpg" />
                  </td>
                  <td>
                    <Link to={'/books/'+book.id }>
                      {book.title}
                    </Link>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.rating}</td>
                  <td>{book.pages}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity}</td>
                  <td>{book.publisher}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button class="btn btn-error" onClick={() => this.removeBookFromBasket(book)}>
                      <i className="fa fa-trash"></i>&nbsp;
                    </button>
                  </td>
                </tr>
               )
              )}
            </tbody>
          </table>
          <div class="card bg-faded">
            <div class="card-block">
              <b>Total Sum:</b> {this.state.items.reduce((sum, curr) => sum + curr.price, 0)}
            </div>
          </div>
          <div className="details-button-group">
            <Link to="/books">
              <button class="btn btn-info">
                <i className="fa fa-book"></i>&nbsp;
                Back to Books
              </button>
            </Link>
            <button class="btn btn-success">
              <i class="fa fa-money-bill"></i>&nbsp;
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;