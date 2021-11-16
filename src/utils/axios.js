import axios from 'axios';
import path from './path';

const DOMAIN = path.backend;
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

export const request = (method, url, data) => {
  return axios(
    {
      method,
      url: DOMAIN + url,
      data,
    },
    { withCredentials: true }
  )
    .then(res => res.data)
    .catch(err => console.log(err));
};
