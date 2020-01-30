import jsonPlaceHolder from '../apis/JsonPlaceHolder';
import _ from 'lodash';

/* 
explain middleware and thunk

export const fetchPosts = async () => {
	//BAD APPROACH!!!!!!!!!
	const resp = await jsonPlaceHolder.get("/posts")
	return {
		type : "FETCH_POST",
		payload : resp
	};
}; */


export const fetchPostAndUsers = () => {
	return async (dispatch,getState) => {
		
		await dispatch(fetchPosts());
		/* const userIds = _.uniq(_.map(getState().posts,"userId"));
		console.log(userIds)
		userIds.forEach(id => dispatch(fetchUser(id))); */
		
		//lodash way of chaing the functions
		//chain doesnt execute until .value() is called
		
		_.chain(getState().posts)
		 .map("userId")
		 .uniq()
		 .forEach(id => dispatch(fetchUser(id)))
		 .value();
		 
		
	}
}


export const fetchPosts =  () => {
	return async (dispatch,getState)=>{
		const resp = await jsonPlaceHolder.get("/posts")
		dispatch({
			type : "FETCH_POSTS",
			payload : resp
		});
	}
};

export const fetchUser = (userId) => {
	return async (dispatch,getState) => {
		const resp = await jsonPlaceHolder.get(`/users/${userId}`);
		dispatch({
			type : "FETCH_USER",
			payload : resp
		});
	};
};


/* 
using 
memoize 

export const fetchUser = (userId) =>{
	return  (dispatch,getState) =>{
		_fetchUser(userId,dispatch,getState)
	}
};


const _fetchUser = _.memoize(async(userId,dispatch,getState) => {
	
		const resp = await jsonPlaceHolder.get(`/users/${userId}`);
		dispatch({
			
			type : "FETCH_USER",
			payload : resp
			
		})
	
}); */