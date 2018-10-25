//This is rootReducer
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import ownerLoginReducer from './ownerLoginReducer';
import listPropertyReducer from './listPropertyReducer';


//Reducer, just combines all the states.
export default combineReducers({
    loginState: loginReducer,
    ownerLoginState: ownerLoginReducer,
    listPropertyState: listPropertyReducer
});