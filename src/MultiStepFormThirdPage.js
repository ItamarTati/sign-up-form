import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const MultiStepFormThirdPage = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="msform-box">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>

            <p>Hey</p>
        
    </form>
    );
  };
  
  export default reduxForm({
    form: 'multi', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate,
  })(MultiStepFormThirdPage);