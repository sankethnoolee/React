import React from 'react';

/* 
uncontrolled

class SearchBar extends React.Component{
	
	
	//default event is passed in every event log
	onInputChange(e){
		console.log(e.target.value);
	}
	
	onInputClick(e){
		console.log("clicked.")
	}
	
	
	render(){
		return (
		
			<div className = "ui segment">
				<form className = "ui form">
					<div className = "field">
						<label>Image Search</label>
						<input 
							type = "text" 
							onChange = {this.onInputChange}
							//onClick = {this.onInputClick}
						/>
					</div>
				</form>
			</div>
		
		)
	}
	
}
 */
 
//controlled below
 
 
class SearchBar extends React.Component{
	
	
	state = {term : ""};
	
	/* 
		Note explain js this prob here....
	
		onFormSubmit(e){
		e.preventDefault();
		console.log(this.state.term);
	} */
	
	//fix 1 using bind this in function
	
	/* constructor(props){
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e){
		e.preventDefault();
		console.log(this.state.term);
	} */
	
	//fix 2 using arrow function for this in function
	 onFormSubmit = (e) => {
		e.preventDefault();
		//in function we need not use 'this' for class based we need 'this'
		this.props.onSubmit(this.state.term);
	} 
	
	render(){
		return (
		
			<div className = "ui segment">
				<form onSubmit = {this.onFormSubmit} className = "ui form">
					<div className = "field">
						<label>Image Search</label>
						<input 
							type = "text"
							//updating value from state
							value = {this.state.term} 
							//callback
							onChange = {(e)=>{this.setState({term : e.target.value})}}
							//onClick = {this.onInputClick}
						/>
					</div>
				</form>
			</div>
		
		)
	}
	
}

export default SearchBar;