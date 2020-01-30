import React from 'react';

import SearchBar from './../searchbar/SearchBar';
import youtube from './../api/youtube';
import VideoList from './../videolist/VideoList';
import VideoDetail from './../VideoDetail/VideoDetail';


class App extends React.Component{
	state = {
				videos : [],
				videoSelected : null
			}
			
			
	//default search
	
	componentDidMount(){
		this.onSearchSubmit("cars");
	}
	
	onSearchSubmit = async (term) =>{
		console.log(term);
		const resp = await youtube.get('/search',{
			params : {
				q : term
			}
		});
		
		//console.log(resp.data.items);
		this.setState({
			videos : resp.data.items,
			videoSelected : resp.data.items.length>0?resp.data.items[0]:null
		});
	}
	
	onVideoSelect = (video) =>{
		//console.log("From app => "+video);
		this.setState({videoSelected : video});
	}
	
	render(){
		
		return(
			<div className = "ui container">
				<SearchBar onFormSubmit = {this.onSearchSubmit}/>
				<div className = "ui grid">
					<div className = "ui row">
						<div className  = "eleven wide column">
							<VideoDetail video = {this.state.videoSelected}/>
						</div>
						<div className = "five wide column">
							<VideoList 
								videos = {this.state.videos}
								onVideoSelect = {this.onVideoSelect}
							/>
						</div>
					</div>
				
				</div>
				
			</div>
		
		
		);
		
	}
	
	
	
}


export default App;