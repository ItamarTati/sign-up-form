import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import { Provider } from "react-redux";
import MultiStepForm from './MultiStepForm';

const rootEl = document.getElementById("root");
ReactDOM.render(
    <Provider store={store} >
      <div >
        <h1>MultiStepForm</h1>
        <MultiStepForm  />
      </div>
    </Provider>,
    rootEl
  );
  


