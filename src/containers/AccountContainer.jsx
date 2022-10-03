import React, { useEffect } from "react";
import AccountComponent from "../components/AccountComponent";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import axios from "axios";
const AccountContainer = (props) => {
  useEffect(() => {
    props.getUser("");
  }, []);
  return (
    <div>
      <AccountComponent {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listUser: state.user.listUser,
  };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    getUser: (data) => {
      Dispatch(actions.getUserRequest(data));
    },
    putUser: (data) => {
      Dispatch(actions.putUserRequest(data));
    },
    deleteUser: (data) => {
      Dispatch(actions.deleteUserRequest(data));
    },
    termAdmin: (data) => {
      Dispatch(actions.termAdminRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
