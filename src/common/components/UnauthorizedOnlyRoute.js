import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticate} from "../utils/auth";


const UnauthorizedOnlyRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticate() !== true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

export default UnauthorizedOnlyRoute
