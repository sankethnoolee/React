import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from './../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
	
	constructor(props){
		super(props)
		
		this.videoRef = React.createRef();
	}
	
	
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id);
		this.player = flv.createPlayer({
			type : "flv",
			url : `http://localhost:8000/live/${this.props.match.params.id}.flv`
		});
		
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}
	
	componentWillUnmount(){
		this.player.destroy();
	}
	
	render(){
		return (
			<div>
			<video 
				ref = {this.videoRef}
				style = {{width :"100%"}}
				controls = "true"
				/>
				<h1> {this.props.stream?this.props.stream.title:""}</h1>
				<h5> {this.props.stream?this.props.stream.description:""}</h5>
			</div>
		
		);
	}
	
}

const mapStateToProps = (state,ownState)=>{
	return {
		stream : state.streams[ownState.match.params.id]
	}
}
export default connect(mapStateToProps,{
	fetchStream : fetchStream
})(StreamShow);