import {
  LOGIN_DATA,
  LOGIN_DATA_SUCCESS,
  LOGIN_DATA_FAIL,
} from "../Action/loginAction";

const initialState = {
  userInfo: {
    isLoading: true,
    data: null,
    error: null,
    isAuth: false,
  },
};

const reducer = (state = initialState, payload: any) => {
  const { type = "", data = null } = payload;
  switch (type) {
    case LOGIN_DATA:
      return {
        ...state,
        userInfo: {
          isLoading: true,
          data: null,
          error: null,
          isAuth: false,
        },
      };
    case LOGIN_DATA_SUCCESS:
      return {
        ...state,
        userInfo: {
          isLoading: false,
          data: data,
          error: null,
          isAuth: true,
        },
      };
    case LOGIN_DATA_FAIL:
      return {
        ...state,
        userInfo: {
          isLoading: false,
          data: null,
          error: data,
          isAuth: false,
        },
      };
    default:
      return state;
  }
};

export default reducer
