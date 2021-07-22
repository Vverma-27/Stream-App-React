import React from "react";
import streams from "../apis/streams";
import { signOutString, signInString } from "./types";

export const signIn = (id) => {
  return { type: signInString, payload: id };
};
export const signOut = () => {
  return { type: signOutString };
};
export const createStream = (formValues) => (dispatch) => {
  streams.post("/streams", formValues);
};
