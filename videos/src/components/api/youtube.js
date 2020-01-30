import axios from 'axios';

const KEY = "AIzaSyBSJXn1vfNXEPwDvKHnZi7gleDiVtRj8Os";

export default axios.create({
	baseURL : "https://www.googleapis.com/youtube/v3",
	params : {
		part : 'snippet',
		maxResults : 5,
		key : KEY
		
	}
});