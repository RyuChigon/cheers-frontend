import types from '@/actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case types.REGISTER_USER:
      return { ...state, success: action.payload };
    case types.AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
