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
  }
};
