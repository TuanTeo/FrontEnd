// domain
export const DOMAIN = "http://localhost:3001/api";
// export const DOMAIN = "https://f32531d8ff9a.ngrok.io";
export const LIMIT = 10;

// HTTP method
export const HTTP_READ = "GET";
export const HTTP_CREATE = "POST";
export const HTTP_UPDATE = "PUT";
export const HTTP_DELETE = "DELETE";

// HTTP headers
export const HTTP_HEADER_JSON = {
  Accept: "applicaiton/json",
  "Content-Type": "application/json",
  withCredentials: true, // should be there
  // credentials: "include", // should be there
};

// types of actions
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGESTER_REQUEST = "REGESTER_REQUEST";
export const REGESTER_SUCCESS = "REGESTER_SUCCESS";
export const REGESTER_FAILURE = "REGESTER_FAILURE";

export const FORGET_PASSWORD_REQUEST = "FORGET_PASSWORD_REQUEST";
export const FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS";
export const FORGET_PASSWORD_FAILURE = "FORGET_PASSWORD_FAILURE";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";
// account managerment

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const PUT_USER_REQUEST = "PUT_USER_REQUEST";
export const PUT_USER_SUCCESS = "PUT_USER_SUCCESS";
export const PUT_USER_FAILURE = "PUT_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const TERM_ADMIN_REQUEST = "TERM_ADMIN_REQUEST";
export const TERM_ADMIN_SUCCESS = "TERM_ADMIN_SUCCESS";
export const TERM_ADMIN_FAILURE = "TERM_ADMIN_FAILURE";
