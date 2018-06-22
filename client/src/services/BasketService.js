import Api from './Api';

const BASKET_ROUTE = 'api/basket';

export default {
  addBookToBasket(book) {
    return Api.post(BASKET_ROUTE, book);
  },

  removeBookFromBasket(id) {
    return Api.delete(`${BASKET_ROUTE}/${id}`);
  }
};