import React from "react";
import { signOutString, signInString } from "../actions/types";

const INITIAL_STATE = { isSignedIn: null, userId: null };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signInString:
      return { ...state, isSignedIn: true, userId: action.payload };
    case signOutString:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
export default authReducer;
