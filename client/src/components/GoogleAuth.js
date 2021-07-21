import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ auth, signIn, signOut }) => {
  const auth2 = useRef(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "994368160999-qcfm4kuvoeu2ftmt69rnneo36g5ah6j3.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/userinfo.email",
        })
        .then(() => {
          auth2.current = window.gapi.auth2.getAuthInstance();
          onAuthChange();
          auth2.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = () => {
    if (auth2.current.isSignedIn.get())
      signIn(auth2.current.currentUser.get().getId());
    else signOut();
  };
  const onSignInClick = () => {
    auth2.current.signIn();
  };
  const onSignOutClick = () => {
    auth2.current.signOut();
  };
  const helper = () => {
    switch (auth.isSignedIn) {
      case true:
        return (
          <button className="ui button red" onClick={onSignOutClick}>
            <i className="icon google" />
            Sign Out
          </button>
        );
      case false:
        return (
          <button className="ui button red" onClick={onSignInClick}>
            <i className="icon google" />
            Sign In With Google
          </button>
        );
      default:
        return "Loading";
    }
  };
  return <div>{helper()}</div>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
