import React from 'react';
import './index.css';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const MultiStepFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="msform-box">
        <Field 
            id = 'msform fieldset' 
            name="name"
            type="text"
            component={renderField}
            label="Name:"
        />
        <Field
            name="role"
            type="text"
            component={renderField}
            label="Role:"
        />
        <Field 
            name="email" 
            type="email" 
            component={renderField} 
            label="Email:" 
        />
        <Field
            name="password"
            type="password"
            component={renderField}
            label="Password:"
        />
        
      <div className = 'button-container'>
        <button type="submit" className="msform-action-button">Submit</button>
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