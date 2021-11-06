import types from './types';
import { request } from '../utils/axios';

const USER_URL = '/api/user';

export async function getAllUser() {
  const data = await request('get', USER_URL + '/users', null);
  var uusers = [];
  var i;
  for (i = 0; i < data.length; i++) {
    uusers.push(Object.values(data[i]));
  }
  return {
    type: types.GET_ALL_USERS,
    payload: uusers,
  };
}

export function registerUser(dataToSubmit) {
  if (dataToSubmit['userName'] == '') {
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  const data = request('post', USER_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_USER,
    payload: data,
  };
}

export function modifyUser(dataToSubmit) {
  if (dataToSubmit['userName'] == '') {
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  const data = request('post', USER_URL + '/modifyuser', dataToSubmit);
  return {
    type: types.MODIFY_USER,
    payload: data,
  };
}

export function chooseEmogee(Emogee) {
  return {
    type: types.CHOOSE_EMOGEE,
    payload: Emogee,
  };
}
