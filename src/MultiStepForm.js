import React, { Component } from 'react';
import './index.css';
import MultiStepFormFirstPage from './MultiStepFormFirstPage';
import MultiStepFormSecondPage from './MultiStepFormSecondPage';
import MultiStepFormThirdPage from './MultiStepFormThirdPage';



class MultiStepForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.nextPageSubmission = this.nextPageSubmission.bind(this);
        this.state = {
          page: 1,
        };
      }


      nextPage() {
        this.setState({ page: this.state.page + 1 } )
      }

      nextPageSubmission(values) {
        this.setState({ page: this.state.page + 1 } )
        console.log(JSON.stringify(values, 0, 2))
      }
      

      

    render() {
        const { page } = this.state;
        
        
        return (
          <div  className = 'msform'>
            {page === 1 ? <div>1</div> : <div>2</div>}
            {page === 1 && <MultiStepFormFirstPage onSubmit={this.nextPage} />}
            {page === 2 && <MultiStepFormSecondPage  onSubmit={ this.nextPageSubmission }/>}
            {page === 3 && <MultiStepFormThirdPage  /> }
            
            
        </div>
        
      );
    }
  }


  
  
  export default MultiStepForm;