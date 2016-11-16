import React from 'react';

const SignIn = () => {
    return(
      <div class="row">
        <div class="col-md-6 col-lg-offset-3">
          <form class="form-horizontal">
            <fieldset>
              <legend>Sign In</legend>
              <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                  <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                <div class="col-lg-10">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
}

export default SignIn;