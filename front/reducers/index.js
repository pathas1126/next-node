import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
// reducer를 합쳐주는 함수
import { combineReducers } from "redux";

// (이전상태, 액션) => 다음상태, 개수를 줄여준다고 해서 리듀서
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log(`HYDRATE>>>>>>>>>>${HYDRATE}`);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
