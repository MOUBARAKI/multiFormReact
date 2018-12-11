import React, { Component } from 'react';
import InsertForm from './InsertForm';
import Confirm from './Confirm';
import ModifyForm from './ModifyForm';

export class GlobalForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

 

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phoneNumber } = this.state;
    const values = { firstName, lastName, email,phoneNumber };

    switch (step) {
      case 1:
        return (
          <InsertForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ModifyForm 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}/>
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      
    }
  }
}

export default GlobalForm;