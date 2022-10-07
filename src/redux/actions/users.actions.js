import UserActionTypes from "./users.types";

export const login = (email, password) => {
  console.log("inside login action");
  return {
    type: UserActionTypes.API_LOGIN_REQUEST,
    payload: {
      data: { email, password },
    },
  };
};
