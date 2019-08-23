import React from 'react';
import './index.css';
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
        <Field
            name="role"
            type="text"
            component={renderField}
            label="Role"
        />
        <Field 
            name="email" 
            type="email" 
            component={renderField} 
            label="Email" 
        />
        <Field
            name="password"
            type="password"
            component={renderField}
            label="password"
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