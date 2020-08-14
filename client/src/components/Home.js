import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Header from './Header';
import { fetchTest, addUser } from '../actions';
// import JoinForm from './JoinForm';

import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

// const MessageBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   margin-top: 100px;
//   padding: 40px;
//   text-align: center;
//   background-color: linen;
//   color: paleVioletRed;
//   border-radius: 20px;
//   width: 400px;
// `;

class Home extends Component {
  componentDidMount() {
    this.props.fetchTest();
    // this.props.addUser();
  }

  // initialize state to hold validity of form fields
  state = { fullname: false, email: false, password: false, cityname: false, data: {
    fullname: '',
    cityname: '',
    email: '',
    password: ''
  } }

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = field => state => {
    const oldData = this.state.data;
    oldData[field] = state.value;
    this.setState({ [field]: state.errors.length === 0, data: oldData });
  };

  // state change watch functions for each field
  emailChanged = this.fieldStateChanged('email');
  fullnameChanged = this.fieldStateChanged('fullname');
  passwordChanged = this.fieldStateChanged('password');
  citynameChanged = this.fieldStateChanged('cityname');
  handleFormSubmit = (e) => {
    // e.preventDefault();
    this.props.addUser(this.state.data);
    // parent.open('/display');
    window.location.href('/display');
  }
  render() {
    const { fullname, email, password, cityname } = this.state;
    const formValidated = fullname && email && password && cityname;

    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
    const validateFullname = value => {
      const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
      if (!regex.test(value)) throw new Error('Fullname is invalid');
    };
    const validateCityname = value => {
      const regex = /^[a-z]{1,}/i;
      if (!regex.test(value)) throw new Error('Cityname is invalid');
    };

    return (
      <div className="Home">
        <Header />
        <div className="container">
          {/* <MessageBox className="col-sm-8 col-sm-offset-2">
            Message from API: <Message>{message}</Message>
          </MessageBox> */}
          {/* <JoinForm /> */}
          <div className="form-container d-table-cell position-relative align-middle">
        <form action="/" method="POST" noValidate>
          <div className="py-5 border-gray border-top border-bottom">
            {/** Render the fullname form field passing the name validation fn **/}
            <FormField type="text" fieldId="fullname" label="Fullname" placeholder="Enter Fullname" validator={validateFullname} onStateChanged={this.fullnameChanged} required />
            
            <FormField type="text" fieldId="cityname" label="Cityname" placeholder="Enter Cityname" validator={validateCityname} onStateChanged={this.citynameChanged} required />

            {/** Render the email field component **/}
            <EmailField fieldId="email" label="Email" placeholder="Enter Email Address" onStateChanged={this.emailChanged} required />

            {/** Render the password field component using thresholdLength of 7 and minStrength of 3 **/}
            <PasswordField fieldId="password" label="Password" placeholder="Enter Password" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />
            
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
            {/* <legend className="form-label mb-0">Support Team</legend> */}
            {/** Show the form button only if all fields are valid **/}
            { formValidated && <Link to="/display" onClick={this.handleFormSubmit} className="btn btn-primary text-uppercase px-3 py-2">Join</Link> }
          </div>
        </form>
      </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { test, user } = state;
  return {
    test,
    user
  };
}

// Home.propTypes = {
//   fetchTest: PropTypes.func.isRequired,
//   test: PropTypes.shape({
//     message: PropTypes.string,
//   }),
//   addUser: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     city: PropTypes.string,
//     email: PropTypes.string,
//     password: PropTypes.string,
//   }),
// };

Home.defaultProps = {
  test: null,
  user: {}
};

export default connect(mapStateToProps, { fetchTest, addUser })(Home);
