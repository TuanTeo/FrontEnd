import * as types from "../constants";

const DEFAULT_STATE = {
  isLoading: false,
  error: false,
  messageError: "",
  listUser: [],
  dataFetched: false,
  data: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
    case types.PUT_USER_REQUEST:
    case types.DELETE_USER_REQUEST:
    case types.FORGET_PASSWORD_REQUEST:
    case types.TERM_ADMIN_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listUser: action.payload,
        dataFetched: true,
      };
    case types.PUT_USER_SUCCESS:
    case types.DELETE_USER_SUCCESS:
    case types.TERM_ADMIN_SUCCESS:
    case types.FORGET_PASSWORD_SUCCESS:
    case types.RESET_PASSWORD_SUCCESS:
      console.log("🚀 ~ file: accountReducer.js ~ line 40 ~ action.payload", action.payload)
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case types.GET_USER_FAILURE:
    case types.PUT_USER_FAILURE:
    case types.DELETE_USER_FAILURE:
    case types.TERM_ADMIN_FAILURE:
    case types.FORGET_PASSWORD_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageError: action.payload.message,
      };

    default:
      return {
        ...state,
      };
  }
};
