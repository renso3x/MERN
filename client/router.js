import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

import Greeting from './components/home';
import Main from './components/main';
import SignUp from './components/register/SignUp';
import SignIn from './components/auth/SignIn';

class AppRoute extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Greeting}/>
                        <Route path="signup" component={SignUp}/>
                        <Route path="signin" component={SignIn}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default AppRoute;