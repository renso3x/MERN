import React from 'react';

import { Link } from 'react-router';

class Navigation extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <Link class="navbar-brand" to="/">Acitivty Overlord</Link>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li><Link to="signup">Register</Link></li>
                    <li><Link to="signin">Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}

export default Navigation;