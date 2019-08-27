import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const MultiStepFormSecondPage = props => {
    const { handleSubmit, pristine, submitting } = props;
    return(
        <form onSubmit={handleSubmit} className="msform-box">
            
            
                <div className='checkbox'>
                <label htmlFor="updates">Receive updates about Tray.io product by email</label>
                <div >
                    <Field 
                    name="updates"
                    id="updates"
                    component={renderField}
                    type="checkbox"
                    value="true"
                    />
                </div>
            </div>
            
            <div className='checkbox'>
            <label htmlFor="communication">Receive communication by email for other products created by Tray.io</label>
                <div >
                    <Field 
                    name="communication"
                    id="communication"
                    component={renderField}
                    type="checkbox"
                    />
                    </div>
                    </div>                
      
    <div className = 'button-container'>
        <button  type="submit" className="msform-action-button" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
form: 'multi', 
destroyOnUnmount: false, 
forceUnregisterOnUnmount: true, 
validate,
})(MultiStepFormSecondPage);