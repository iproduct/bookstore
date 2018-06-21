import Api from './Api';

const BOOKS_ROUTE = 'api/books';

export default {
  query() {
    return Api.get(BOOKS_ROUTE);
  },

  add(book) {
    return Api.post(BOOKS_ROUTE, book);
  },

  delete(id) {
    return Api.delete(`${BOOKS_ROUTE}/${id}`);
  }
};
