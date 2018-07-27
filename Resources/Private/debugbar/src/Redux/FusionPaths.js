import {createAction, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';

const SET_ALL = 'fusiondebugbar/FusionPaths/SET_ALL';
const INIT_CURRENT_FUSIONPATH_NAME = 'fusiondebugbar/FusionPaths/INIT_CURRENT_FUSIONPATH_NAME';
const SET_CURRENT_FUSIONPATH_NAME = 'fusiondebugbar/FusionPaths/SET_CURRENT_FUSIONPATH_NAME';

const initialFusionPathState = {
    all: {},
    currentFusionPathName: null
};

//
// Export the action types
//
export const actionTypes = {
    SET_ALL,
    INIT_CURRENT_FUSIONPATH_NAME,
    SET_CURRENT_FUSIONPATH_NAME
};

//
// Export the actions
//
export const actions = {
    setAll: createAction(SET_ALL, allFusionPaths => ({allFusionPaths})),
    initCurrentFusionPathName: createAction(INIT_CURRENT_FUSIONPATH_NAME),
    setCurrentFusionPathName: createAction(SET_CURRENT_FUSIONPATH_NAME, currentFusionPathName => ({currentFusionPathName})),
};

//
// Export the reducer
//
export const reducer = handleActions({
    [SET_ALL]: (state, action) => ({
        ...state,
        all: action.payload.allFusionPaths
    }),
    [INIT_CURRENT_FUSIONPATH_NAME]: (state, action) => ({
        ...state,
        currentFusionPathName: Object.keys(state.all)[0]
    }),
    [SET_CURRENT_FUSIONPATH_NAME]: (state, action) => ({
        ...state,
        currentFusionPathName: action.payload.currentFusionPathName
    })
}, initialFusionPathState);

const allFusionPaths = state => state.FusionPaths.all;
const currentFusionPathName = state => state.FusionPaths.currentFusionPathName;
const currentFusionPath = createSelector(
    allFusionPaths,
    currentFusionPathName,
    (all, current) => all[current]
);

//
// Export the selectors
//
export const selectors = {
    allFusionPaths,
    currentFusionPath,
    currentFusionPathName
};
