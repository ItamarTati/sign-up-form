import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate';



const MultiStepFormThirdPage = props => {
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit } className="msform-box">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>

            <p className ='verify'>Please verify your email adress, you have received an email from us already!</p>
    </form >
    );
  };
  
export default reduxForm({
form: 'multi', 
destroyOnUnmount: false, 
forceUnregisterOnUnmount: true, 
validate,
})(MultiStepFormThirdPage);