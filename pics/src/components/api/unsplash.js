import axios from 'axios';

export default axios.create({
	
	baseURL : "https://api.unsplash.com",
	headers : {
				Authorization: 'Client-ID 7d4de248f6a74b9064a1bcacfca31556b94d521edd3756d3c7f4764e5efc72f3'
			}
	
});