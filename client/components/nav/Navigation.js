import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../actions/signin';

class Navigation extends React.Component {
  render() {
    const { isAuthenticated } = this.props.user;

    const guestsLinks = (
      <ul class="nav navbar-nav navbar-right">
        <li><Link to="signup">Register</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    )
    const authLinks = (
      <ul class="nav navbar-nav navbar-right">
        <li><a onClick={()=> {
          this.props.logout();
        }}>Logout</a></li>
      </ul>
    )

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
            { isAuthenticated ? authLinks : guestsLinks }
          </div>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  user: React.PropTypes.object,
  logout: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: function() {
      dispatch(logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);