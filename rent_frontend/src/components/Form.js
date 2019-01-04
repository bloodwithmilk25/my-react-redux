import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <h3>Book a Cell</h3>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="company"
            component={this.renderInput}
            label="Назвиние Компании"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "Form"
})(Form);
