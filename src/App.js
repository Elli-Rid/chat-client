import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import ChatClient from "./screens/ChatClient/ChatClient";
import Login from "./screens/Login/Login";
import NotFound from "./screens/NotFound/NotFound";
import Provider from "react-redux/es/components/Provider";
import {syncHistoryWithStore} from 'react-router-redux'
import history from './common/utils/history';
import reducer from "./screens/reducer";
import {createStore} from "redux";

let store = createStore(reducer);

const syncedHistory = syncHistoryWithStore(history, store);


const App = () => (
    <Provider store={store}>
        <Router history={syncedHistory}>
            <Switch>
                <Route path="/" exact component={ChatClient}/>
                <Route path="/login" component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </Provider>
);

export default App;
