import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ header, content, onDismiss, actions }) => {
  return ReactDOM.createPortal(
    <section onClick={onDismiss} className="ui dimmer modals visible active">
      <section
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <i onClick={onDismiss} class="close icon"></i>
        <section class="header">{header}</section>
        <section class="content">{content}</section>
        <section class="actions">{actions}</section>
      </section>
    </section>,
    document.querySelector("#modal")
  );
};

export default Modal;
