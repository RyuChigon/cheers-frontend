import types from '@/actions/types';

const initialstate = {
  userList: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return { ...state, userList: action.payload };
    case types.REGISTER_USER:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
