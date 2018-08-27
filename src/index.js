import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootEl = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        rootEl
    );
};

render(App);

registerServiceWorker();
