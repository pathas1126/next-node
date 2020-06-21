export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.logIn:
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case actions.logOut:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
