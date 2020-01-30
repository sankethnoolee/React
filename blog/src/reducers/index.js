import {combineReducers} from 'redux';
import postReducer from './PostReducers'
import usersReducer from './usersReducer'
export default combineReducers({
	
	posts : postReducer,
	users : usersReducer
	
});