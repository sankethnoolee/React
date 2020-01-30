import React from 'react';
import VideoCard from './../VideoCard/VideoCard'

const VideoList = (props) => {
	
	const videoList =  props.videos.map((video) =>{
			return (
				
					<VideoCard 
						key = {video.id.videoId}
						video ={video} 
						onVideoSelect = {props.onVideoSelect}
					/>
				
			)
	});
	
	return (
	
		<div className = "ui relaxed divided list">
			{videoList}
		</div>
	
	)
	
	
}

export default VideoList;
