import {createStore} from "redux";
import {reducer} from './reducer';

export * from './action-types';
export * from './action-creator'

export const store = createStore(reducer);
