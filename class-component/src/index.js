import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season';
import Spinner from './Spinner';

/* 
const App = () =>{
	window.navigator.geolocation.getCurrentPosition(
		(position)=>{//for success
			console.log(position);
		},
		(err)=>{//for failure
			console.log(err);
		}
	
	);
	return (
		<div> Hi Noolee</div>
	
	)
	
}
 */


 
 
 
/*

___________________________________________________________________________________

Without life cycle methods
___________________________________________________________________________________

class App extends React.Component{
	
	constructor(props){
		//ceremony step.
		super(props);
		
		this.state = {
			lat : null,
			errorMessage : ''
		};
		
		
		window.navigator.geolocation.getCurrentPosition(
			(position)=>{
				//for success
				console.log(position);
				this.setState({
					lat : position.coords.latitude
				});
			},
			(err)=>{//for failure
				console.log(err.message);
				this.setState({
					errorMessage : err.message
				});
			}
		
		);
		
	}
	
	//life cycle methods
	
	 componentDidMount(){
		console.log("Mounted.");
	}
	
	componentDidUpdate(){
		console.log("re rendered.");
	} 
	
	
	
	//React says we have to define render
	render(){
		if(this.state.errorMessage && !this.state.lat){
			return (
				<div> Hi Noolee something failed.</div>
			)
		}else if(!this.state.errorMessage && this.state.lat){
			return (
				<div> Hi Noolee you are at : {this.state.lat}</div>
			
			)
		}else{
			return (
				<div> Loading... {this.state.lat}</div>
			
			)
		}
		
	}
}

*/

/*
__________________________________________________________________________________

//using life cycle methods

initialize state
__________________________________________________________________________________
*/
class App extends React.Component{
	
	/* constructor(props){
		//ceremony step.
		super(props);
		
		this.state = {
			lat : null,
			errorMessage : ''
		};
		
	} */
	
	state = {
		lat : null,
		errorMessage : ''
	};
	
	//life cycle methods
	
	 componentDidMount(){
		console.log("Mounted.");
		window.navigator.geolocation.getCurrentPosition(
			(position)=>{
				//for success
				console.log(position);
				this.setState({
					lat : position.coords.latitude
				});
			},
			(err)=>{//for failure
				console.log(err.message);
				this.setState({
					errorMessage : err.message
				});
			}
		
		);
	}
	
	componentDidUpdate(){
		console.log("re rendered.");
	} 
	
	renderContent(){
		
		//avoid conditional return (example border for page)
		if(this.state.errorMessage && !this.state.lat){
			return (
				<div> Hi Noolee something failed.</div>
			)
		}else if(!this.state.errorMessage && this.state.lat){
			return (
				//<div> Hi Noolee you are at : {this.state.lat}</div>
				<Season latitude = {this.state.lat}/>
			)
		}
		return (
			<Spinner message = "Please accept location."/>
		
		)

		
	}
	
	//React says we have to define render
	render(){
		return (
			<div className = "border red">
				{this.renderContent()}
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

