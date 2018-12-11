import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';

import Stepper from 'react-stepper-horizontal';
import { List, ListItem ,ListItemText} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui';

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
        <Card  align ='center'>
        <div>
      <Stepper  steps={ [{title: 'Insert your information'}, {title: 'Modify your informations'}, {title: 'Confirm you informations'}] } activeStep={ 2 } defaultColor={'#4265ff'} completeColor={'#018a947e'} completeBarColor={'#018a947e'} activeColor={'rgb(62, 217, 228)'} />
    </div>
    <h2 class='h2' >Confirm your informations</h2>

        <React.Fragment>
          <List>
            <a value='' onDoubleClick={handleChange('firstName')}><ListItem container='list-item' primaryText={values.firstName}><h3>
              First Name
            </h3></ListItem></a>
            <a value='' onDoubleClick={handleChange('lastName')}><ListItem primaryText={values.lastName}><h3>Last Name
            </h3></ListItem></a>
            <a value='' onDoubleClick={handleChange('email')}><ListItem primaryText={values.email}><h3>Email
            </h3></ListItem></a>
            <a value='' onDoubleClick={handleChange('phoneNumber')}><ListItem primaryText={values.phoneNumber}><h3>Phone Number
            </h3></ListItem></a>

          </List>
          <br />
          <tr  >
            <td align='center'>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          </td>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
          />
          
          </tr>
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

export default Confirm;