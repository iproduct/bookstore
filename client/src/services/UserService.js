import axios from 'axios';
import Api from './Api';

export default {
  query() {
    return Api.get('api/users');
  },

  register(user) {
    return Api.post('authentication/register', user);
  },

  login(user) {
    return Api.post('authentication/login', user);
  },

  logout() {
    return Api.post('authentication/logout');
  },

  get(id) {
    return Api.get(`api/users/${id}`);
  },

  getCurrent() {
    return Api.get('authentication/current');
  },

  getBasket() {
    return Api.get(`api/basket`);
  },

  addBasketItem(userId, item) {
    return Api.post(`api/basket`, item);
  },

  removeBasketItem(userId, itemId) {
    return Api.post(`api/basket/${itemId}`);
  },

  updateProfile(user) {
    return Api.put(`authentication/current`, user);
  }
};
