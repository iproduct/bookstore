import axios from 'axios';

const BOOKS_ROUTE = '/api/books';

export default {
  query() {
    return axios.get(BOOKS_ROUTE);
  }
};
