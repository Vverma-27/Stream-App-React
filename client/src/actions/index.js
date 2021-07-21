import React from "react";
import { signOutString, signInString } from "./types";

export const signIn = (id) => {
  return { type: signInString, payload: id };
};
export const signOut = () => {
  return { type: signOutString };
};
