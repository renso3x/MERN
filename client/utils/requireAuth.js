import React from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        //check if user is authenticated
        componentWillMount() {
            if(!this.props.isAuthenticated) {
                browserHistory.push('/login');
            }
        }

        //redirect user to homepage if logged out
        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated) {
                browserHistory.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.user.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate);
}