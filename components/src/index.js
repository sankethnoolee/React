// Import React and ReactDOM libraries
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


// Create a react components
const App = ()=>{
	
		/* return (
				<div >Hi Noolee</div>
		) */
		return(
		
		
			<div className = "ui container comments">
				<CommentDetail
					author = "Sanketh Noolee"
					time=  "Today at 01:26 PM" 
				/>
				<CommentDetail 
					author = "Venky" 
					time  = " Today at 02:26 PM"
				/>
				<CommentDetail 
					author = "Sai"
				/>
				<CommentDetail 
					author = "Sinchana Noolee"
				/>
				
			
			</div>
		
		
		
		)
		
		

}

// Take the react component and show it on screen
ReactDOM.render(

	<App/>,//tag created
	document.querySelector('#root')//target

);