import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

//  액션
const actions = {
  logIn: "LOG_IN",
  logOut: "LOG_OUT",
};

// 액션 생성자
export const loginAction = (data) => {
  return {
    type: actions.logIn,
    data,
  };
};
export const logoutAction = () => {
  return {
    type: actions.logOut,
  };
};

// (이전상태, 액션) => 다음상태, 개수를 줄여준다고 해서 리듀서
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log(`HYDRATE>>>>>>>>>>${HYDRATE}`);
      return {
        ...state,
        ...action.payload,
      };
    case actions.logIn:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case actions.logOut:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
