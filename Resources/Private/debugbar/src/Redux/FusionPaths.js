import {createAction, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';

const SET_ALL = 'fusiondebugbar/FusionPaths/SET_ALL';

const initialFusionPathState = {
    all: {}
};

//
// Export the action types
//
export const actionTypes = {
    SET_ALL
};

//
// Export the actions
//
export const actions = {
    setAll: createAction(SET_ALL, allFusionPaths => ({allFusionPaths})),
};

//
// Export the reducer
//
export const reducer = handleActions({
    [SET_ALL]: (state, action) => ({
        ...state,
        all: action.payload.allFusionPaths
    })
}, initialFusionPathState);

const allFusionPaths = state => state.FusionPaths.all;

//
// Export the selectors
//
export const selectors = {
    allFusionPaths
};
