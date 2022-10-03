import React from "react";
import ForgetPasswordComponent from "../components/ForgetPassword";
import * as actions from "../actions/index";
import { connect } from "react-redux";

const ForgetPassword = (props) => {
  return (
    <div>
      <ForgetPasswordComponent {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (Dispatch) => {
  return {
    forgetPasswordRequest: (data) => {
      Dispatch(actions.forgetPasswordRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
