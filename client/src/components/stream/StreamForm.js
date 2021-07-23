import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = (props) => {
  const renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    return (
      <section
        className={`field ${
          !meta.active && meta.error && meta.touched ? "error" : ""
        }`}
      >
        <label>{label}</label>
        <input type="text" {...input} />
        {(() =>
          !meta.active && meta.error && meta.touched ? (
            <section className="ui error message">
              <section className="header">{meta.error}</section>
            </section>
          ) : null)()}
      </section>
    );
  };
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      className="ui form error"
    >
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui primary button">Submit</button>
    </form>
  );
};
const validate = ({ title, description }) => {
  const errors = {
    title: !title && "Enter Title",
    description: !description && "Enter Description",
  };
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
