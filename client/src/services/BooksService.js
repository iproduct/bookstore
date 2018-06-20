import Api from './Api';

const BOOKS_ROUTE = 'api/books';

export default {
  query() {
    return Api.get(BOOKS_ROUTE);
  }
};
