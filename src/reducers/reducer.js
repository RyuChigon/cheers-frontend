import types from '@/actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
  a_team: 0,
  b_team: 0,
  a_team2: 0,
  b_team2: 0,
  minigame2_barposition: 0,
  viewpoints: [],
  isadmin: false,
  num_a: 0,
  num_b: 0,
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
    case types.CHEER_SCORE:
      if (action.payload[0] == null) {
        return {
          ...state,
          a_team: 0,
          b_team: action.payload[1],
        };
      }
      if (action.payload[1] == null) {
        return {
          ...state,
          a_team: action.payload[0],
          b_team: 0,
        };
      }
      return {
        ...state,
        a_team: action.payload[0],
        b_team: action.payload[1],
      };
    case types.CHEER_SCORE2:
      if (action.payload[0] == null) {
        return {
          ...state,
          a_team2: 0,
          b_team2: action.payload[1],
        };
      }
      if (action.payload[1] == null) {
        return {
          ...state,
          a_team2: action.payload[0],
          b_team2: 0,
        };
      }
      return {
        ...state,
        a_team2: action.payload[0],
        b_team2: action.payload[1],
      };
    case types.SET_BAR_POSITION:
      return {
        ...state,
        minigame2_barposition: action.payload,
      };
    case types.GET_VIEWPOINTS:
      return {
        ...state,
        viewpoints: action.payload,
      };
    case types.IS_ADMIN:
      return {
        ...state,
        isadmin: action.payload,
      };
    case types.GET_NUM_OF_EACH_TEAM:
      return {
        ...state,
        num_a: action.payload1,
        num_b: action.payload2,
      };
    case types.INIT_VIEWPOINT:
      return {
        ...state,
        viewpoints: [],
      };
    default:
      return state;
  }
}
