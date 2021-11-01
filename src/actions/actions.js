import types from './types';
import { request } from '../utils/axios';

const USER_URL = '/api/user';

export function loginUser(dataToSubmit) {
  const data = request('post', USER_URL + '/login', dataToSubmit);

  return {
    type: types.LOGIN_USER,
    payload: data,
  };
}

export function registerUser(dataToSubmit) {
  const data = request('post', USER_URL + '/register', dataToSubmit);

  return {
    type: types.REGISTER_USER,
    payload: data,
  };
}

export function auth() {
  const data = request('post', USER_URL + '/auth');

  return {
    type: types.AUTH_USER,
    payload: data,
  };
}
