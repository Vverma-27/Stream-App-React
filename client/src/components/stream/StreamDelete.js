import React, { useEffect } from "react";
import Modal from "../modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const StreamDelete = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const stream = useSelector(({ streams }) => streams[id]);
  const onDismiss = () => history.push("/");
  const actions = (
    <>
      <section
        onClick={() => dispatch(deleteStream(id))}
        class="ui button negative"
      >
        Delete
      </section>
      <section onClick={onDismiss} class="ui button">
        Cancel
      </section>
    </>
  );
  const content = !stream
    ? "Are you sure you want to delete this stream ?"
    : `Are your sure you want to delete stream titled ${stream.title}`;
  const header = "Delete Stream";
  return (
    <Modal
      header={header}
      content={content}
      onDismiss={onDismiss}
      actions={actions}
    />
  );
};

export default StreamDelete;
