import React from 'react';

import axios from 'axios';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password, confirm_password } = this.refs;

    if(password.value != confirm_password.value) {
      console.log('Password Mismatch');
      return;
    }

    const user = {};
    user.email = email.value;
    user.password = password.value;
    this.props.userSignUpRequest(user);
  }


  render() {
    return(
      <div class="row">
        <div class="col-md-6 col-lg-offset-3">
          <form class="form-horizontal">
            <fieldset>
              <legend>Join our community</legend>
              <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                  <input type="email" ref="email" class="form-control" id="inputEmail" placeholder="Email"/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                <div class="col-lg-10">
                  <input type="password" ref="password" class="form-control" id="inputPassword" placeholder="Password" />
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">Password Confirmation</label>
                <div class="col-lg-10">
                  <input type="password" ref="confirm_password" class="form-control" id="inputPassword" placeholder="Password" />
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="submit" class="btn btn-block btn-primary" onClick={this.onSubmit}>Sign Up</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired
}

export default SignUpForm;