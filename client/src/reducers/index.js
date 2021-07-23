import React from "react";
import { reducer as FormReducer } from "redux-form";
import { combineReducers } from "redux";
import auth from "./authReducer";
import streamsReducer from "./streamsReducer";
export default combineReducers({
  auth,
  form: FormReducer,
  streams: streamsReducer,
});
