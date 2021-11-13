import types from './types';
import { request } from '../utils/axios';

const USER_URL = '/api/user';

export async function getAllUser() {
  const data = await request('get', USER_URL + '/users', null);
  var uusers = [];
  var i;
  if (data === undefined) {
    return {
      type: types.GET_ALL_USERS,
      payload: null,
    };
  }
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

export function setCheerScore(a_team, b_team) {
  console.log('setcheerscore: ' + a_team + ' ' + b_team);
  return {
    type: types.CHEER_SCORE,
    payload: [a_team, b_team],
  };
}

export function setCheerScore2(a_team2, b_team2) {
  console.log('setcheerscore2: ' + a_team2 + ' ' + b_team2);
  return {
    type: types.CHEER_SCORE2,
    payload: [a_team2, b_team2],
  };
}

export function cheering() {
  request('get', USER_URL + '/cheering', null);
  return {
    type: types.CHEERING,
    payload: null,
  };
}

export function setBarposition(position) {
  return {
    type: types.SET_BAR_POSITION,
    payload: position,
  };
}
