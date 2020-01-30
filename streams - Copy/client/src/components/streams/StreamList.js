import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from './../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount(){
		this.props.fetchStreams();
	}
	
	getRenderList =()=>{
		return this.props.streams.map((stream)=>{
			return (
				<div className= "item" key = {stream.id}>
					{this.getRenderAdminOptions(stream)}
					<i className = "large middle aligned icon camera"></i>
					<div className = "content">
						<Link 
							to = {`/streams/${stream.id}`}
							className = "header"
						>{stream.title}</Link>
						<div className = "description">{stream.description}</div>
						
					</div>
				</div>
			);
		});
	}
	
	getRenderAdminOptions =(stream)=>{
		if(stream.userId===this.props.currentUserId){
			return (
				<div className = "right floated content">
					<Link 
						className = "ui button primary"
						to = {`streams/edit/${stream.id}`}
					>Edit</Link>
					{/* <button className = "ui button primary">Edit</button> 
					<button className = "ui button negative">Delete</button>*/}
					<Link 
						className = "ui button negative"
						to = {`streams/delete/${stream.id}`}
					>Delete</Link>
				</div>
			);
		}
	}
	
	renderCreateStream = () => {
		if(this.props.isSignedIn){
			return (
				<div style = {{textAlign : "right"}}>
					<Link 
						to  = "/streams/new"
						className = "ui button primary"
					>Create Stream</Link>
				</div>
				
			);
		}
	}
	
	render(){
		//console.log(this.props.streams)
		return (
			<div>
				<h2>Streams</h2>
				<div className = "ui celled list">{this.getRenderList()}</div>
				{this.renderCreateStream()}
			</div>
		
		);
	}
}
const mapStateToProps =(state)=>{
	
	return {
				streams : Object.values(state.streams),
				currentUserId : state.auth.userId,
				isSignedIn : state.auth.isSignedIn
			};
}
export default connect(mapStateToProps,{
	fetchStreams : fetchStreams
})(StreamList);