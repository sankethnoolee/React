import React from 'react';

class ImageCard extends React.Component{
	
	constructor(props){
		super(props);
		
		this.imageRef = React.createRef();
		this.state = {spans : 0};
	}
	
	componentDidMount(){
		
		/*console.log(this.imageRef);
		sample op : 
			current: img
			alt: "Valley of Fires"
			src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMTY5NX0"
			naturalWidth: 1080
			naturalHeight: 1620
			.
			.
			
			other height props as well
		*/
		
		//this might take image to load -- sometimes height is zero
		
		//console.log(this.imageRef.current.clientHeight);
		
		//once image is loaded binding an image
		this.imageRef.current.addEventListener('load',this.setSpans);
		
	}
	
	setSpans=()=>{
		const height = (this.imageRef.current.clientHeight);
		const spans = Math.ceil(height/10);
		
		
		//this is equivalent to {spans : spans}
		this.setState({spans})
		
	}
	
	render(){
		
		const {description,urls} = this.props.image;
		
		return(
			<div style = {{gridRowEnd : `span ${this.state.spans}`}}>
				<img 
					ref = {this.imageRef}
					alt = {description}
					src = {urls.regular}
				
				/>
			</div>
		
		);
	}
	
	
}

export default ImageCard;