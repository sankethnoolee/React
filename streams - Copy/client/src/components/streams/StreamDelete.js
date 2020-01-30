import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Modal from './../modal/Modal';
import history from './../../history';
import {fetchStream, deleteStream} from './../actions';

class StreamDelete extends React.Component{
	
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id)
		//console.log(this.props);
	}
	
	
	renderActions = ()=>{
		const id = this.props.match.params.id;
		return (
			<React.Fragment >
				<button onClick = {()=>{this.props.deleteStream(id)}} className = "ui button negative">Delete</button>
				<Link to ="/" className = "ui button">Cancel</Link>
			</React.Fragment>
		);
	};
	
	renderContent = () => {
		if(!this.props.stream){
			return "Are ypu sure you want ot delete this stream?"
		}
		return `Are ypu sure you want ot delete this stream '${
			this.props.stream.title
		}'?`
	}
	
	render(){
		
		return (
			<div>
				<Modal
					title = "Delete Stream"
					content = {this.renderContent()}
					actions = {this.renderActions()}
					onDismiss = {()=>{history.push("/");}}
				
				/>
			</div>
		
		);
	}
	
}
const mapStateToProps = (state,ownState) => {
	
	return {
		
		stream : state.streams[ownState.match.params.id]
		
	}
	
}

export default connect(mapStateToProps,{
	fetchStream:fetchStream,
	deleteStream:deleteStream
})(StreamDelete);