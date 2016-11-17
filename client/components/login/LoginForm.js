import React from 'react';

const LoginForm = ({
    onChange,
    onSubmit
}) => {
    return (
        <div class="row">
            <div class="col-md-6 col-lg-offset-3">
              <form class="form-horizontal" onSubmit={onSubmit}>
                <fieldset>
                  <legend>Login</legend>
                  <div class="form-group">
                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-10">
                      <input type="email" name="email" class="form-control" id="email" placeholder="Email" onChange={onChange} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                    <div class="col-lg-10">
                      <input type="password" name="password" class="form-control" id="password" placeholder="Password" onChange={onChange} />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                        <button type="submit" class="btn btn-block btn-primary">Login</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
        </div>
    )
}

LoginForm.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
}

export default LoginForm;