import stream from './../../apis/stream';
import history from './../../history';
import {CREATE_STREAM,
		DELETE_STREAM, 
		EDIT_STREAM,
		FETCH_STREAMS,
		FETCH_STREAM} from './types';

export const signIn = (userId) =>{
	return {
		type : "SIGN_IN",
		payload : {
			userId : userId
		}
	};
};


export const signOut = () =>{
	return {
		type : "SIGN_OUT"
	};
};


export const createStream = (formValues) => {
	return async (dispatch,getState)=>{
		const userId = getState().auth.userId;
		const resp = await stream.post("/streams",{...formValues, "userId" : userId});
		dispatch({
			type : CREATE_STREAM,
			payload : resp.data
		});
		
		//programatic navigation here.
		//navite to home
		history.push("/");
		
	}
};

export const fetchStreams= () => {
	return async (dispatch,getState)=>{
		const resp = await stream.get("/streams");
		dispatch({
			type : FETCH_STREAMS,
			payload : resp.data
		});
	}
};

export const fetchStream = (id) => {
	return async (dispatch,getState)=>{
		const resp = await stream.get(`/streams/${id}`);
		console.log(resp)
		dispatch({
			type : FETCH_STREAM,
			payload : resp.data
		});
	}
};


export const editStream = (id,formValues) => {
	return async (dispatch,getState)=>{
		const resp = await stream.patch(`/streams/${id}`,formValues);
		dispatch({
			type : EDIT_STREAM,
			payload : resp.data
		});
		history.push("/");
	}
};


export const deleteStream = (id) => {
	return async (dispatch,getState)=>{
		await stream.delete(`/streams/${id}`);
		dispatch({
			type : DELETE_STREAM,
			payload : id
		});
		history.push("/");
	}
};