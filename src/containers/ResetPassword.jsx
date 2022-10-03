import React from "react";
import ResetPasswordComponent from "../components/ResetPassword";
import * as actions from "../actions/index";
import { connect } from "react-redux";

const ResetPassword = (props) => {
  console.log("🚀 ~ file: ResetPassword.jsx ~ line 7 ~ ResetPassword ~ props", props)
  return (
    <div>
      <ResetPasswordComponent {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.login.data,
    loading: state.login.loading,
    error: state.login.messageError,
  };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    resetRequest: (data) => {
      Dispatch(actions.resetPasswordRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
