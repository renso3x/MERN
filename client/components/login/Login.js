import React from 'react';
import { connect } from 'react-redux';

import { userSignIn } from '../../actions/signin';

import { browserHistory } from 'react-router';

import LoginForm from './LoginForm';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.userSignIn(user)
            .then(resp => {
                browserHistory.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <LoginForm
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

export default connect(null, { userSignIn })(Login);