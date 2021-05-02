import axios from 'axios';
import { config } from '../constants';

const instance = axios.create({
  baseURL: config.API_URL,
  ContentType: 'application/json',
  Accept: 'application/json',
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let textMess = '';

    if (error.response) {
      if (error.response.status === 500) {
        textMess = (error.response.data && error.response.data.message) ? error.response.data.message : '500: System error';
      } else if (error.response.status === 503) {
        textMess = 'Server error';
      } else {
        const { errors } = error.response.data;
        textMess = (errors && errors.length) ? errors[Object.keys(errors)[0]][0] : error.response.data.message;
        console.log(errors)
      }

    } else {
      textMess = error.message;
    }

    return Promise.reject(textMess);
  },
);

export default instance;
