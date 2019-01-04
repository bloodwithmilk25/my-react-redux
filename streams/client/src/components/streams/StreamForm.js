import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // Field passes props object on line 14, then we destructure it to get only 'input'. We can pass addition props to Field, such as 'label'
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // adding all the props to the element
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  // go through all the fields and check them for errors,
  // if this func returns an empy object at the end it means
  // that everything is OK and a form was Submited
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }

  return errors;
};

// const mapStateToProps = state => {};

export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
