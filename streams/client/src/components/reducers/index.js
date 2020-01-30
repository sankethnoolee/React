import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './oAuthReducer';
import streamReducer from './streamReducer';

//redux form shoild be assigned with the key form

export default combineReducers({
	auth : authReducer,
	form : formReducer,
	streams : streamReducer
})