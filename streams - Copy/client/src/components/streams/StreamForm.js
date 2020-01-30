import React from 'react';
import {Field, reduxForm} from 'redux-form';



class StreamForm extends React.Component{
	renderError = (p)=>{
		if(p.error && p.touched){
			return (
				<div className = "ui error message">
					<div className = "header">{p.error}</div>
				</div>
			);
		}
	}
	
	renderInput = (formProps) =>{
		console.log(formProps)
		/* console.log(formProps);
		there are many other functions n values the input need for redux field 
		so we add all the props as below for an input
		
		<input 
				onChange = {formProps.input.onChange}
				value = {formProps.input.value}
			/> */
			//meta.touched is focused and de-focused
		const className = `field ${(formProps.meta.error && formProps.meta.touched)?"error" :""}`;
		
		return (
			<div className = {className}>
				<label>{formProps.label}</label>
				<input 
					{...formProps.input}
					autoComplete = "off"
				/>
				{this.renderError(formProps.meta)}
			</div>
		)
	}
	
	
	onSubmit = (formValues)=>{
		//this will be handled by redux form handle submit
		//e.preventDefault();
		//and e will not have event object
		/* console.log("!!!!!!!!!!!!!!!!!!!!!")
		console.log(formValues) */
		//onSubmit is passed from parent
		this.props.onSubmit(formValues);
	}
	
	
	render(){
		//console.log(this.props);
		return (
			
			<form 
				onSubmit = {this.props.handleSubmit(this.onSubmit)} 
				className = "ui form error"
			>
				<Field 
					name = "title"
					component = {this.renderInput}
					label = "Enter Title"
				/>
				<Field 
					name = "description"
					component = {this.renderInput}
					label = "Enter Description"
				/>
				<button className = "ui button primary">Submit</button >
			</form>
		
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if(!formValues.title){
		//no title
		errors.title = "You must enter a title";
	}
	if(!formValues.description){
		//no description
		errors.description = "You must enter a description";
	}
	
	return errors;
}



export default reduxForm({
	form : 'streamForm',
	validate : validate,
	enableReinitialize: true
})(StreamForm);

/* 
create stream is not called by common form so deleting 

export default connect(null,{
	createStream : createStream
})(formWrapped); */