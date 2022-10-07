import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { login } from "./redux/actions/users.actions";

const mapStateToProps = (state) => ({
  isLogged: state.userState.logged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
