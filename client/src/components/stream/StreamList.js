import React, { useEffect } from "react";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const StreamList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStreams());
  }, []);
  const streams = useSelector(({ streams }) => Object.values(streams));
  const { userId: stateUserId, isSignedIn } = useSelector(({ auth }) => auth);
  const renderedAdminButtons = (userId, streamId) => {
    return stateUserId === userId ? (
      <section className="right floated content">
        <Link to={`/stream/delete/${streamId}`} class="negative ui button">
          Delete
        </Link>
        <Link to={`/stream/edit/${streamId}`} class="ui blue basic button">
          Edit
        </Link>
      </section>
    ) : null;
  };
  const renderCreateButton = () => {
    return isSignedIn ? (
      <section style={{ float: "right" }}>
        <Link to="/stream/create" className="ui button primary">
          Create Stream
        </Link>
      </section>
    ) : null;
  };
  const renderedList = streams.map(({ title, description, userId, id }) => (
    <section className="item">
      {renderedAdminButtons(userId, id)}
      <i class="camera retro icon big"></i>
      <section className="content">
        <section className="header">{title}</section>
        <section className="description">{description}</section>
      </section>
    </section>
  ));
  return (
    <section>
      <section className="ui celled list">{renderedList}</section>
      {renderCreateButton()}
    </section>
  );
};

export default StreamList;
