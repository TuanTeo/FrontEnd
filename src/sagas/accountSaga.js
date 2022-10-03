import * as types from "../constants";
import { put, takeEvery } from "@redux-saga/core/effects";
import commonAPI from "../fetchAPIs/commonAPI";
import callAPI from "../fetchAPIs/callAPI";

function* getUserHandle(action) {
  try {
    console.log("hih")
    const result = yield callAPI("GET", "/user");
    yield put({
      type: types.GET_USER_SUCCESS,
      payload: result.user,
    });
  } catch (error) {
    yield put({
      type: types.GET_USER_FAILURE,
      payload: error.message,
    });
  }
}
function* putUserHandle(action) {
  try {
    yield commonAPI("PUT", "/user", action.payload);
    yield put({
      type: types.PUT_USER_SUCCESS,
    });
    yield put({
      type: types.GET_USER_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.PUT_USER_FAILURE,
      payload: error.message,
    });
  }
}
function* deleteUserHandle(action) {
  try {
  } catch (error) {
    yield put({
      type: types.GET_USER_FAILURE,
      payload: error.message,
    });
  }
}

function* termAdminHandle(action) {
  try {
  } catch (error) {
    yield put({
      type: types.GET_USER_FAILURE,
      payload: error.message,
    });
  }
}
function* resetHandle(action) {
  try {
    const data = yield callAPI("POST", "/reset-password", action.payload);
    if (!data) throw new Error("error");
    if (data?.message.includes("success")) {
      alert("Thay đổi mật khẩu thành công");
      window.location = window.location.origin + "/login";
    } else {
      alert(data?.message);
    }
    yield put({
      type: types.RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: types.RESET_PASSWORD_FAILURE,
      payload: error.message,
    });
  }
}

export const accountSaga = [
  takeEvery(types.GET_USER_REQUEST, getUserHandle),
  takeEvery(types.PUT_USER_REQUEST, putUserHandle),
  takeEvery(types.DELETE_USER_REQUEST, deleteUserHandle),
  takeEvery(types.TERM_ADMIN_REQUEST, termAdminHandle),
  takeEvery(types.RESET_PASSWORD_REQUEST, resetHandle),
];
