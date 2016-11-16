import React from 'react';

import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions';

import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
  render() {
    const { userSignUpRequest } = this.props;
    return(
      <SignUpForm userSignUpRequest={userSignUpRequest} />
    )
  }
};

SignUp.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps,
  { userSignUpRequest }
)(SignUp);