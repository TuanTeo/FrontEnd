import React from "react";
import Login from "../components/Login";
import * as actions from "../actions/index";
import { connect } from "react-redux";

const LoginContainer = (props) => {
  console.log("🚀 ~ file: LoginContainer.jsx ~ line 7 ~ LoginContainer ~ props", props)
  return (
    <div>
      <Login {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (Dispatch) => {
  return {
    loginRequest: (data) => {
      Dispatch(actions.loginRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
