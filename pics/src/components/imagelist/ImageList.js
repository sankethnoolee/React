import './ImageList.css'

import React from 'react';

import ImageCard from './ImageCard'


class ImageList extends React.Component {
	//console.log(this.props.images);
	processImages(){
		console.log(this.props.images)
		
		//using basic image.
		
		/* const imagesDiv = this.props.images.map(({description,id,urls})=>{
		return <img alt = {description} key  = {id} src = {urls.regular}/>
		}); */
		
		const imagesDiv = this.props.images.map((image)=>{
			return <ImageCard key  = {image.id} image = {image}/>
		});
		
		return imagesDiv;
	}
	
	
	render(){
		return (
			
			<div className = "image-list">{this.processImages()}</div>
		
		);
		
	}
	
}


export default ImageList;