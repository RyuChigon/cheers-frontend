import types from '@/actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return { ...state, userList: action.payload };
    case types.REGISTER_USER:
      console.log(action.payload);
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
}
