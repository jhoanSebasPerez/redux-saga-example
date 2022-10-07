import UserActionTypes from "../actions/users.types";

const initialState = {
  fetching: false,
  token: null,
  logged: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.API_LOGIN_REQUEST:
      return { ...state, fetching: true };
    case UserActionTypes.API_LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        toke: action.payload.token,
        logged: true,
      };
    case UserActionTypes.API_LOGIN_FAILURE:
      return { ...state, fetching: false, error: action.payload.error };
    default:
      return state;
  }
};

export default userReducer;
