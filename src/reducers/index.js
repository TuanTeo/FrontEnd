import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import accountReducer from './accountReducer';
export default combineReducers({
    login: loginReducer,
    user : accountReducer
});