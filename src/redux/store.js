import { createStore, applyMiddleware } from 'redux';
import customerReducer from './reducer';
import thunk from "redux-thunk";

const store = createStore(customerReducer, applyMiddleware(thunk));

export default store;