import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import Stepper from 'react-stepper-horizontal';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui';

export class InsertForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
      <Card>
     <div>
      <Stepper steps={ [{title: 'Insert your information'}, {title: 'Modify your informations'}, {title: 'Confirm you informations'}] } activeStep={ 0 } defaultColor={'#4265ff'} completeColor={'#018a947e'} completeBarColor={'#018a947e'} activeColor={'rgb(62, 217, 228)'} />
     </div>
        <React.Fragment>
          <h2 class='h2'>Enter User Details</h2>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <TextField
            hintText="Enter Your Phone Number"
            floatingLabelText="Phone"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
          />
     <br />
      <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          
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

export default InsertForm;