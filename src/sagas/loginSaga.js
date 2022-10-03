import * as types from "../constants";
import { put, takeEvery } from "@redux-saga/core/effects";
import CallApi from "../fetchAPIs/callAPI";
import localstorage from "../localStorage";

function* loginHandle(action) {
  try {
    const result = yield CallApi("POST", "/login", action.payload);
    if (result.message && result.message.match("account")) {
      alert("Tài khoản không tồn tại");
      throw new Error(result.message);
    } else {
      if (result.message && result.message.match("password")) {
        alert("sai mật khẩu");
        throw new Error(result.message);
      } else {
        yield localstorage.setToken(result);
        yield put({
          type: types.LOGIN_SUCCESS,
          payload: {
            result,
          },
        });
        // yield (window.location.href = window.location.origin + "/account");
      }
    }
  } catch (error) {
    yield put({
      type: types.LOGIN_FAILURE,
      payload: error.message,
    });
  }
}

function* regesterloginHandle(action) {
  try {
    const result = yield CallApi("POST", "/regester", action.payload);
    if (result.message) {
      throw new Error(result.message);
    }
    yield put({
      type: types.REGESTER_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    yield put({
      type: types.REGESTER_FAILURE,
      payload: error.message,
    });
  }
}

function* forgetPasswordHandle(action) {
  try {
    const result = yield CallApi("POST", "/forget-password", action.payload);
    if (!result.message.includes("success")) {
      throw new Error(result.message);
    }
    yield put({
      type: types.FORGET_PASSWORD_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    yield put({
      type: types.FORGET_PASSWORD_FAILURE,
      payload: error.message,
    });
  }
}

export const loginSaga = [
  takeEvery(types.LOGIN_REQUEST, loginHandle),
  takeEvery(types.REGESTER_REQUEST, regesterloginHandle),
  takeEvery(types.FORGET_PASSWORD_REQUEST, forgetPasswordHandle),
];
