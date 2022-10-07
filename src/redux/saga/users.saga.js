import { call, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "../actions/users.types";
import UserAPI from "../../api/users.api";

function* loginWorker(action) {
  try {
    const response = yield call(UserAPI.login, action.payload.data);
    yield put({
      type: UserActionTypes.API_LOGIN_SUCCESS,
      payload: { token: response.data.token },
    });
  } catch (error) {
    yield put({ type: UserActionTypes.API_LOGIN_FAILURE, payload: { error } });
  }
}

function* loginSaga() {
  yield takeLatest(UserActionTypes.API_LOGIN_REQUEST, loginWorker);
}

export { loginSaga };
