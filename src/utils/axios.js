import axios from 'axios';
import path from './path';

const DOMAIN_BACKEND = path.backend;
const DOMAIN_ARCHIVE = path.archive;
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

export const request = (method, url, data) => {
  return axios(
    {
      method,
      url: DOMAIN_BACKEND + url,
      data,
    },
    { withCredentials: true }
  )
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const requestArchive = (method, url, data) => {
  return axios(
    {
      method,
      url: DOMAIN_ARCHIVE + url,
      data,
    },
    { withCredentials: true }
  )
    .then(res => res.data)
    .catch(err => console.log(err));
};
