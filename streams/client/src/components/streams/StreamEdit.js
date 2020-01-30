import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream , editStream} from './../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id);
	}
	
	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id,formValues);
	};
	
	render(){
		console.log(this.props)
		return (
			<div>
				<h3>Edit a Stream</h3>
				
				<StreamForm 
					onSubmit = {this.onSubmit}
					initialValues = {
						_.pick(this.props.stream,'title','description')
					}
				/>
			</div>
		
		)
	}
	
}

const mapStateToPropsMap = (state,ownProps) => {
	return {
			stream : state.streams[ownProps.match.params.id]
			
			};
}

export default connect(mapStateToPropsMap,{
		fetchStream:fetchStream,
		editStream : editStream
	})(StreamEdit);