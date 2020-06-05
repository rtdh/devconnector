import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import teachersReducer from './teachersReducer';
import esrReducer from './esrReducer';


export default combineReducers({
    auth: authReducer,
    todo: todoReducer,
    teachers: teachersReducer,
    esr : esrReducer
})