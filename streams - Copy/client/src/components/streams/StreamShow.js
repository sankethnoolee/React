import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from './../actions';

class StreamShow extends React.Component {
	
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id)
	}
	
	render(){
		return (
			<div>
				StreamShow {this.props.stream?this.props.stream.title:""}
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