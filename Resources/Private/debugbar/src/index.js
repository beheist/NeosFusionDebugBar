import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// import { reducers, actions } from './Redux/index';

window.setTimeout(() => {
    const store = createStore(
        state => state,
        JSON.parse(document.getElementById("fusionConfig").getAttribute("data-fusionconfig")),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // store.dispatch(actions.fetchUsersStart());

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('fusiondebugbar'));
}, 0);
