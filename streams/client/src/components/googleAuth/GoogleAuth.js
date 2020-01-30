import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from './../actions';

const clientId = "586133863854-vpb5s3cp6vvd2kro2lubk6a8jdbpp8f0.apps.googleusercontent.com";



class GoogleAuth extends React.Component{
	//state = {isSignedIn : null};
	componentDidMount(){
		//window scope is mandatory
		//second argument is call back after clietn is loaded
		window.gapi.load("client:auth2",()=>{
			window.gapi.client.init({
				clientId : clientId,
				scope : "email"
			}).then(()=> {
				this.auth = window.gapi.auth2.getAuthInstance();
				/*this.setState({isSignedIn : this.auth.isSignedIn.get()});
				 */
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
		
		
	}
	
	onAuthChange = (isSignedIn) => {
		//this.setState({isSignedIn : this.auth.isSignedIn.get()});
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		}else{
			this.props.signOut();
		}
	}
	
	onSignInClick = () => {
		this.auth.signIn();
	}
	
	onSignOutClick = () => {
		this.auth.signOut();
	}
	
	renderAuthButton(){
		if(this.props.isSignedIn===null){
			return null;
		}else if(this.props.isSignedIn){
			return (
				<button onClick = {this.onSignOutClick} className= "ui red google button" >
					<i className = "google icon" />
					Sign out
				</button>
			
			);
		}else{
			return (
				<button onClick = {this.onSignInClick} className= "ui red google button" >
					<i className = "google icon" />
					Sign In
				</button>
			
			);
		}
	}
	
	render (){
		
		return (
			<div> {this.renderAuthButton()}</div>
		
		)
		
	}
	
}



const mapStateToProps = (state) =>{
	//console.log(state)
	return {isSignedIn : state.auth.isSignedIn}
}


export default connect(mapStateToProps,{
	signIn : signIn,
	signOut : signOut
})(GoogleAuth);