import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import ChatClient from "./screens/ChatClient/ChatClient";
import Login from "./screens/Login/Login";
import NotFound from "./screens/NotFound/NotFound";
import Provider from "react-redux/es/components/Provider";
import history from './common/utils/history';
import reducer from "./screens/reducer";
import {createStore} from "redux";
import PrivateRoute from "./common/components/PrivateRoute";
import UnauthorizedOnlyRoute from "./common/components/UnauthorizedOnlyRoute";

let store = createStore(reducer);


const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/" exact component={ChatClient}/>
                <UnauthorizedOnlyRoute path="/login" component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </Provider>
);

export default App;
