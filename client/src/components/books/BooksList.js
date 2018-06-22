import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksService from '../../services/BooksService';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      newBook: {},
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addBook = this.addBook.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  onChange(e) {
    this.state.newBook[e.target.name] = e.target.value;
    this.setState(this.state.newBook);
  }

  async addBook() {
    const addedBook = await BooksService.add(this.state.newBook);
    const books = this.state.books.concat([addedBook]);

    this.setState({ books });
    this.closeModal();
  }

  closeModal() {
    this.setState({ modalIsOpen: false, newBook: {} });
  }

  async componentDidMount() {
    const books = await BooksService.query();
    this.setState({ books });
  }

  render() {
    return (
      <div className="BooksList">
        <div className="row operations-row">
          <button className="btn btn-primary btn-sm" onClick={this.openModal}>
            <i class="fas fa-plus"></i>&nbsp;
            Add New Book
          </button>
        </div>
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

              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
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
                </tr>
               )
              )}
            </tbody>
          </table>
          <div>
            <Modal isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Book Modal">
              <h2 ref={subtitle => this.subtitle = subtitle}>Add a Book</h2>
              <form className="form-add-book">
                <div className="form-group">
                  <input className="form-control"
                          value={this.state.newBook.title}
                          onChange={this.onChange}
                          placeholder="Title"
                          name="title" />
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.author}
                         onChange={this.onChange}
                         name="author"
                         placeholder="Author"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.publisher}
                         onChange={this.onChange}
                         name="publisher"
                         placeholder="Publisher"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.quantity}
                         onChange={this.onChange}
                         name="quantity"
                         placeholder="Quantity"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.rating}
                         onChange={this.onChange}
                         name="rating"
                         placeholder="Rating"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.pages}
                         onChange={this.onChange}
                         name="pages"
                         placeholder="Pages"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.price}
                         onChange={this.onChange}
                         name="price"
                         placeholder="Price"/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                         value={this.state.newBook.genre}
                         onChange={this.onChange}
                         name="genre"
                         placeholder="Genre" />
                </div>

              </form>
              <div className="details-button-group">
                <button className="btn btn-success" onClick={this.addBook}>
                  <i class="fas fa-plus"></i>&nbsp;
                  Add
                </button>

                <button className="btn btn-info" onClick={this.closeModal}>
                  <i class="fas fa-times"></i>&nbsp;
                  Cancel
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksList;