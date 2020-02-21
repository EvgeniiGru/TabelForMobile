import {createStore, combineReducers, applyMiddleware} from "redux";
import  TableReducer from "./TableReducer"


let reducers = combineReducers({
    table:TableReducer
});

const store = createStore(reducers);

export default store;