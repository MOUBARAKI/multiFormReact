import React, { Component } from 'react';
import '../App.css';
import Stepper from 'react-stepper-horizontal';
import {Card,Text,Label,Button,Err} from'./GenralParts';

export class InsertForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      
     <form>
       <Card>
         
      <Stepper steps={ [{title: 'Insert your information'}, {title: 'Modify your informations'}, {title: 'Confirm you informations'}] } activeStep={ 0 } defaultColor={'#4265ff'} completeColor={'#018a947e'} completeBarColor={'#018a947e'} activeColor={'rgb(62, 217, 228)'} />
     
        <React.Fragment>
          <h2 class='h2'>Insert User Details</h2>
          <br/>
        <div>  
          <Text type ="text"
                       
            onChange={handleChange('firstName')}
            value = {values.firstName}
          />
        <br/>
        <Label for={values.firstName} >Enter Your Name</Label>

<Err >           {values.nameError}
</Err>
      
          </div>

          <br/>
          
          <div>
          <Text type='text'
            onChange={handleChange('lastName')}
            value={values.lastName}
          />
           <br/><Label  >Enter Your Last Name</Label>
         <Err>
            {values.lastNameError}
            </Err>
          </div>
          <br />
          <div>
          <Text
            onChange={handleChange('email')}
            value={values.email}
          />
           <br/><Label for={values.firstName} >Enter Your Email</Label>
          <Err>
            {values.emailError}
          </Err>
          </div>
          <br />
          <div>
          <Text
            onChange={handleChange('phoneNumber')}
            value={values.phoneNumber}
          />
           <br/><Label for={values.firstName} >Enter Your Phone Number</Label>
          <Err>
            {values.phoneNumberError}
          </Err>
     <br />
     </div>
      <Button
            primary
            style={styles.button}
            onClick={this.continue}>
            Continue
            </Button>
          
      </React.Fragment>
      
      </Card>

      </form>
        );
  }
}

const styles = {
  button: {
    margin: 20
  }
};

export default InsertForm;