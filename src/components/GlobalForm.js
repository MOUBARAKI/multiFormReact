import React, { Component } from 'react';
import InsertForm from './InsertForm';
import Confirm from './Confirm';
import ModifyForm from './ModifyForm';

const initialState = {
  step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    emailError : '',
    nameError : '',
    lastNameError: '',
    phoneNumberError : ""
};

export class GlobalForm extends Component {
  state = initialState ;

  // Proceed to next step
  nextStep = () => {
    
    const isValid = this.validate();
    if (isValid) {
   const { step } = this.state;
    this.setState({
      step: step + 1,
      emailError :'',
      phoneNumberError:'',
      nameError :'',
      lastNameError : ""

    
    });
    
  }
  
  
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

  validate = () => {
    let nameError = "";
    let emailError = "";
    let lastNameError = '';
    let phoneNumberError = "";
    // let passwordError = "";

    if (!this.state.firstName) {
      nameError = "last name cannot be blank";
    }
    if (!this.state.lastName) {
      lastNameError = "last name cannot be blank";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".") || this.state.email.indexOf('.') < this.state.email.indexOf('@') ) {
      emailError = "invalid email";
    }
    if( isNaN(this.state.phoneNumber) || this.state.phoneNumber.length < 10 || this.state.phoneNumber[0]!= '0' || (this.state.phoneNumber[1]!= '7' && this.state.phoneNumber[1]!= '6' && this.state.phoneNumber[1]!= '5' ))
    {
      // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
phoneNumberError =" invalid phone number . must be a number with 10 digits at least starting with 07 or 05 or 06 "    }

    if (emailError || nameError || lastNameError || phoneNumberError) {
      this.setState({ emailError, nameError , lastNameError  ,phoneNumberError});
      return false;
    }

    return true;
  };

 

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phoneNumber ,nameError ,emailError ,lastNameError , phoneNumberError} = this.state;
    const values = { firstName, lastName, email,phoneNumber ,nameError , emailError ,lastNameError ,phoneNumberError};

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