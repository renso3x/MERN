import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import jwt from 'jsonwebtoken';

import store from './store';

import setAuthorizationToken from './utils/setAuthorizationToken';
import requireAuth from './utils/requireAuth';
import { setCurrentUser } from './actions/signin';

import Greeting from './components/home';
import Main from './components/main';
import SignUp from './components/register/SignUp';
import Login from './components/login/Login';
import Users from './components/users/Users';

if(localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

class AppRoute extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Greeting}/>
                        <Route path="signup" component={SignUp}/>
                        <Route path="login" component={Login}/>
                        <Route path="users" component={requireAuth(Users)}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default AppRoute;