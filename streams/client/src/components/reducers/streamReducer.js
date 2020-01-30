import _ from 'lodash';

import {
	CREATE_STREAM,
	DELETE_STREAM, 
	EDIT_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM
	
} from './../actions/types';


export default (state = {} ,action) => {
	switch(action.type){
		case FETCH_STREAM: 
			return {...state,[action.payload.id]:action.payload};
		case CREATE_STREAM : 
			return {...state,[action.payload.id]:action.payload};
		case EDIT_STREAM : 
			return {...state,[action.payload.id]:action.payload};
		case DELETE_STREAM : 
			return _.omit(state,action.payload);
		case FETCH_STREAMS : 
		//lodash map keys
			return {...state,..._.mapKeys(action.payload,"id")};
		default : 
			return state;
	}
}