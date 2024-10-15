// import createstore
import { createStore , applyMiddleware , compose } from "redux" 
import { composeWithDevTools } from 'redux-devtools-extension';

// import rootreducers 

import rootreducer from "../Reducer";
import {thunk} from "redux-thunk"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

// store 

const store = createStore ( rootreducer,composeEnhancer(applyMiddleware(thunk))) ;

// export 
export default store 