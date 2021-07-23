import React from "react";
import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      const newStateFetch = action.payload.reduce((nState, stream) => {
        nState = {
          ...nState,
          [stream.id]: stream,
        };
        return nState;
      }, {});
      return newStateFetch;
    case DELETE_STREAM:
      const { [action.payload]: _, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
