import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';

import Stepper from 'react-stepper-horizontal';
import { List, ListItem ,ListItemText} from 'material-ui/List';
import {Button} from './GenralParts';
import { Card } from './GenralParts';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values ,handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <Card >
        <div>
      <Stepper  steps={ [{title: 'Insert your information'}, {title: 'Modify your informations'}, {title: 'Confirm you informations'}] } activeStep={ 2 } defaultColor={'#4265ff'} completeColor={'#018a947e'} completeBarColor={'#018a947e'} activeColor={'rgb(62, 217, 228)'} />
    </div>
    <h2 class='h2' >Confirm your informations</h2>

        <React.Fragment>
          <List>
            <a value='' onDoubleClick={handleChange('firstName')}><ListItem container='list-item' primaryText={values.firstName}><h4>
              First Name
            </h4></ListItem></a>
            <a value='' onDoubleClick={handleChange('lastName')}><ListItem primaryText={values.lastName}><h4>Last Name
            </h4></ListItem></a>
            <a value='' onDoubleClick={handleChange('email')}><ListItem primaryText={values.email}><h4>Email
            </h4></ListItem></a>
            <a value='' onDoubleClick={handleChange('phoneNumber')}><ListItem primaryText={values.phoneNumber}><h4>Phone Number
            </h4></ListItem></a>

          </List>
          <br />

          <Button
            primary={false}
            onClick={this.back}
          >Back</Button>

          <Button
            primary={true}
          >Confirm</Button>
          
        </React.Fragment>
        </Card>
      </MuiThemeProvider>
    );
  }
}



export default Confirm;