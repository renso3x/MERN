import React from 'react';

import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
  render() {
    const { userSignUpRequest, addFlashMessage } = this.props;
    return(
      <SignUpForm
        userSignUpRequest={userSignUpRequest}
        addFlashMessage={addFlashMessage}
      />
    )
  }
};

SignUp.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps,
  { userSignUpRequest, addFlashMessage }
)(SignUp);