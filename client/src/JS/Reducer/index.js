// importation 

import {combineReducers} from 'redux' 
import userReducer from './user'


// create rootReducer
const rootreducer = combineReducers({userReducer})

// export 
export default rootreducer