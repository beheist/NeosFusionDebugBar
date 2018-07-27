import {createAction, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';

const SET_ALL = 'fusiondebugbar/Prototypes/SET_ALL';
const SET_CURRENT_PROTOTYPE_NAME = 'fusiondebugbar/Prototypes/SET_CURRENT_PROTOTYPE_NAME';

const initialPrototypeState = {
    all: {},
    currentPrototypeName: null
};

//
// Export the action types
//
export const actionTypes = {
    SET_ALL,
    SET_CURRENT_PROTOTYPE_NAME
};

//
// Export the actions
//
export const actions = {
    setAll: createAction(SET_ALL, allPrototypes => ({allPrototypes})),
    setCurrentPrototypeName: createAction(SET_CURRENT_PROTOTYPE_NAME, currentPrototypeName => ({currentPrototypeName})),
};

//
// Export the reducer
//
export const reducer = handleActions({
    [SET_ALL]: (state, action) => ({
        ...state,
        all: action.payload.allPrototypes
    }),
    [SET_CURRENT_PROTOTYPE_NAME]: (state, action) => ({
        ...state,
        currentPrototypeName: action.payload.currentPrototypeName
    })
}, initialPrototypeState);

const allPrototypes = state => state.Prototypes.all;
const currentPrototypeName = state => state.Prototypes.currentPrototypeName;
const currentPrototype = createSelector(
    allPrototypes,
    currentPrototypeName,
    (all, current) => all[current]
);

//
// Export the selectors
//
export const selectors = {
    allPrototypes,
    currentPrototype,
    currentPrototypeName
};
