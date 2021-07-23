import React from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = () => {
  const dispatch = useDispatch();
  const onSubmit = (formValues) => dispatch(createStream(formValues));
  return (
    <section>
      <h3>Create stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </section>
  );
};

export default StreamCreate;
