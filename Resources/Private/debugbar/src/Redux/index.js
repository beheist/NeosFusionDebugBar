import {combineReducers} from 'redux';
import * as Prototypes from './Prototypes';
import * as FusionPaths from './FusionPaths';

export const actionTypes = {
    Prototypes: Prototypes.actionTypes,
    FusionPaths: FusionPaths.actionTypes,
};

export const actions = {
    Prototypes: Prototypes.actions,
    FusionPaths: FusionPaths.actions,
};

export const reducer = combineReducers({
    Prototypes: Prototypes.reducer,
    FusionPaths: FusionPaths.reducer,
});

export const selectors = {
    Prototypes: Prototypes.selectors,
    FusionPaths: FusionPaths.selectors,
};
