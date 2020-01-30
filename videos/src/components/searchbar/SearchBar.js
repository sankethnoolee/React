import React from 'react';


class SearchBar extends React.Component{
	//converting the input to controlled
	state = {term:""};
	
	onInputChange = (e) =>{
		this.setState({
			term : e.target.value
		});
	};
	
	onFormSubmit = (e) => {
		//prevent submission on enter.
		e.preventDefault();
		//console.log("value entered -> " + this.state.term);
		
		//TODO call a callback from parent
		this.props.onFormSubmit(this.state.term);
	};
	
	render(){
		
		return(
			
			<div className = "search-bar ui segment">
				<form onSubmit = {this.onFormSubmit} className = "ui form">
					<div className = "field">
						<label>Video Search</label>
						<input 
							type = "text"
							value = {this.state.term}
							onChange = {this.onInputChange}
						/>
					</div>
				</form>
			</div>
			
		)
		
	}
	
	
	
}

export default SearchBar;