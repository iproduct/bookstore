import axios from 'axios';

export default {
  query() {
    return axios.get('http://localhost:3000/api/books');
  }
};
