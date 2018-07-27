import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer, actions} from './Redux/index';

window.setTimeout(() => {
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    const initialState = JSON.parse(document.getElementById("fusionConfig").getAttribute("data-fusionconfig"));
    store.dispatch(actions.Prototypes.setAll(initialState.__prototypes));
    store.dispatch(actions.Prototypes.initCurrentPrototypeName());
    delete initialState.__prototypes;
    store.dispatch(actions.FusionPaths.setAll(initialState));
    store.dispatch(actions.FusionPaths.initCurrentFusionPathName());

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('fusiondebugbar'));
}, 0);
