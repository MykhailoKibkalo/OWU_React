import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";

export * from './action-types';
export * from './action-creators';
export const store = createStore(reducer, applyMiddleware(thunk));
