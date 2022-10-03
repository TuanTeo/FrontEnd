import * as types from "../constants";

export const loginRequest = (payload) => {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
};

export const regesterRequest = (payload) => {
  return {
    type: types.REGESTER_REQUEST,
    payload,
  };
};

export const forgetPasswordRequest = (payload) => {
  return {
    type: types.FORGET_PASSWORD_REQUEST,
    payload,
  };
};
export const resetPasswordRequest = (payload) => {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload,
  };
};

export const getUserRequest = (payload) => {
  return {
    type: types.GET_USER_REQUEST,
    payload,
  };
};

export const putUserRequest = (payload) => {
  return {
    type: types.PUT_USER_REQUEST,
    payload,
  };
};

export const deleteUserRequest = (payload) => {
  return {
    type: types.DELETE_USER_REQUEST,
    payload,
  };
};

export const termAdminRequest = (payload) => {
  return {
    type: types.TERM_ADMIN_REQUEST,
    payload,
  };
};
