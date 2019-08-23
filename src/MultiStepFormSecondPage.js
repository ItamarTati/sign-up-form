import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const MultiStepFormSecondPage = props => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="updates">Receive updates about Tray.io product by email</label>
                <div>
                    <Field
                    name="updates"
                    id="updates"
                    component="input"
                    type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="communication">Receive communication by email for other products created by Tray.io</label>
                <div>
                    <Field
                    name="communication"
                    id="communication"
                    component="input"
                    type="checkbox"
                    />
                </div>
            </div>

        
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

            export default reduxForm({
            form: 'wizard', //                 <------ same form name
            destroyOnUnmount: false, //        <------ preserve form data
            forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
            validate,
            })(MultiStepFormSecondPage);