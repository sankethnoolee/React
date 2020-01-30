import React from 'react';
import {connect} from 'react-redux';
/* 
const SongDetail = ({song}) =>{
	 console.log("-------");
	console.log(props); 
	if(!song){
		return (
	
		<div>
			Select a song.
		</div>
	
	);
	}
	return (
	
		<div>
			<h3>Song Detail : </h3>
			<p>
				Title : {song.title}
				<br/>
				Duration : {song.duration}
			
			</p>
			
		</div>
	
	);
	
}
 */

class SongDetail extends React.Component{
	
	render(){
		const {song} = this.props;
		if(!song){
		return (
	
		<div>
			Select a song.
		</div>
	
	);
	}
	return (
	
		<div>
			<h3>Song Detail : </h3>
			<p>
				Title : {song.title}
				<br/>
				Duration : {song.duration}
			
			</p>
			
		</div>
	
	);
	}
	
}


const mapStateToProps = (state) => {
	
	return {
		song : state.selectedSong
	}
};




export default connect(mapStateToProps)(SongDetail);
 