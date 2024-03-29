import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticate} from "../utils/auth";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticate() === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

export default PrivateRoute
