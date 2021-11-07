import types from '@/actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.GET_ALL_USERS: //모든 유저들을 화면에 띄워주기 위해 가져온다
      if (action.payload === null) {
        return state;
      }
      return { ...state, userList: action.payload };
    case types.REGISTER_USER: //처음에 join 버튼 누를 때
      return { ...state, loginUser: action.payload };
    case types.MODIFY_USER: //처음에 join 버튼 누를 때
      return { ...state, loginUser: action.payload };
    case types.CHOOSE_EMOGEE: //emogee 버튼
      return {
        ...state,
        loginUser: { ...state['loginUser'], emogee: action.payload },
      };
    default:
      return state;
  }
}
