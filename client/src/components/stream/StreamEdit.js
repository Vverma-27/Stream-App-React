import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const stream = useSelector((state) => state.streams[id]);
  if (!stream) return <div>loading....</div>;
  const onSubmit = (formValues) => dispatch(editStream(formValues, id));
  const { title, description } = stream;
  const renderHelper = () => {
    return stream ? (
      <section>
        <h3>Edit stream</h3>
        <StreamForm
          onSubmit={onSubmit}
          initialValues={{ title, description }}
        />
      </section>
    ) : null;
  };
  return <section>{renderHelper()}</section>;
};

export default StreamEdit;
