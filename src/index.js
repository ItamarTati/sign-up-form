import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import showResults from "./showResults";
import { Provider } from "react-redux";
import MultiStepForm from './MultiStepForm';

const rootEl = document.getElementById("root");
ReactDOM.render(
    <Provider store={store} >
      <div style={{ padding: 15 }}>
        <h1>MultiStepForm</h1>
        <MultiStepForm  onSubmit={showResults}/>
      </div>
    </Provider>,
    rootEl
  );
  


