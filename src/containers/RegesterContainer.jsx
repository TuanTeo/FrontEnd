import React from "react";
import Regester from "../components/Regester";
import * as actions from "../actions/index";
import { connect } from "react-redux";

const RegesterContainer = (props) => {
  return (
    <div>
      <Regester {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login.data,
    loading: state.login.loading,
    error: state.login.messageError,
  };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    resgesterRequest: (data) => {
      Dispatch(actions.regesterRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegesterContainer);
