import Api from './Api';

const BOOKS_ROUTE = 'api/books';

export default {
  query() {
    return Api.get(BOOKS_ROUTE);
  },

  get(id) {
    return Api.get(`${BOOKS_ROUTE}/${id}`);
  },

  add(book) {
    return Api.post(BOOKS_ROUTE, book);
  },

  update(book) {
    return Api.put(`${BOOKS_ROUTE}/${book.id}`, book);
  },

  delete(id) {
    return Api.delete(`${BOOKS_ROUTE}/${id}`);
  }
};
