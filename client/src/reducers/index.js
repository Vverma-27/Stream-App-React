import React from "react";
import { reducer as FormReducer } from "redux-form";
import { combineReducers } from "redux";
import auth from "./authReducer";
export default combineReducers({
  auth: auth,
  form: FormReducer,
});
