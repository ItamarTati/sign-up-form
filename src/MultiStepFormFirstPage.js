import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const MultiStepFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Name"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'multi', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
  validate,
})(MultiStepFormFirstPage);