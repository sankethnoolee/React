import React from 'react';

//3rd party components
// removed because we are using from unsplash api
//import axios from 'axios';

//custom components
import SearchBar from './searchBar/SearchBar';
import unsplash from './api/unsplash.js';
import ImageList from './imagelist/ImageList';

class App extends React.Component{
	
	state = {images : []};
	
	
	//callback function
	
	//normally this.set state will be undefined with code below
	//so changing it into arrow function for binding
	
	
	//async onSearchSubmit(term){
		
	onSearchSubmit = async(term) =>{
		
		console.log(term);
		
		//fetch data using axios.
		/* 
		directly using axios
		
		const resp  = await axios.get("https://api.unsplash.com/search/photos",{
			params  :{
				query : term
			},
			headers : {
				Authorization: 'Client-ID 7d4de248f6a74b9064a1bcacfca31556b94d521edd3756d3c7f4764e5efc72f3'
			}
		}); */
		
		
		//using the api we created.
		const resp  = await unsplash.get("/search/photos",{
			params  :{
				query : term
			}
		});
		
		//console.log(resp.data.results);
		
		//err for setState
		
		this.setState({images : resp.data.results})
		
		// method 1 to wait for async
		
		/* .then((resp)=>{
			console.log(resp.data.results);
		}); */
		
	}
	
	render(){
		return (
			<div className = "ui container" style = {{marginTop : '10px'}}>
				{/*onsubmit can be any attr name.*/}
				<SearchBar onSubmit = {this.onSearchSubmit}/>
					{/* <h2> Found : {this.state.images.length} images</h2> */}
					
				<ImageList images = {this.state.images}/>
			</div>
		)
	}
}
export default App;
