import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import '../App.css';

import Stepper from 'react-stepper-horizontal';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui';

export class ModifyForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values , handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Card align='center'>
           <div>
      <Stepper steps={ [{title: 'Insert your information'}, {title: 'Modify your informations'}, {title: 'Confirm you informations'}] } activeStep={ 1 } defaultColor={'#4265ff'} completeColor={'#018a947e'} completeBarColor={'#018a947e'} activeColor={'rgb(62, 217, 228)'} />
    </div>
        <React.Fragment>
          <h2 class='h2'>Modify User Details</h2>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {values.nameError}
          </div>
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {values.lastNameError}
          </div>
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {values.emailError}
          </div>
          <br />
          <TextField
            hintText="Enter Your Phone Number"
            floatingLabelText="Phone Number"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {values.phoneNumberError}
          </div>
           <br/>
           
          <tr >
           <td align='center'>   
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          </td>
          </tr >
          
        </React.Fragment>
        </Card>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default ModifyForm;