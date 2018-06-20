import axios from 'axios';

const Api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000/'
});

Api.interceptors.response.use(res => res.data, err => Promise.reject(err));

export default Api;
