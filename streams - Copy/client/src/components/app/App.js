import React from 'react';
import {Router , Route, Link, Switch} from 'react-router-dom';



import StreamCreate from './../streams/StreamCreate';
import StreamList from './../streams/StreamList';
import StreamEdit from './../streams/StreamEdit';
import StreamDelete from './../streams/StreamDelete';
import StreamShow from './../streams/StreamShow';
import Header from './../header/Header';

import history from './../../history';


/* const pageOne = () =>{
	return (<div>Welcome Mr.Noolee1
	<Link to = "/pagetwo"> go to page to</Link>
	
	</div>)
}
const pageTwo = () =>{
	return (<div>Welcome Mr.Noolee2
	<Link to = "/"> go to page to</Link></div>)
}
 */
 
 
/* 
	---------------------
		
		browser router
	
	---------------------

class App extends React.Component{
	render(){
		return (
		
		<div className = "ui container">
			<BrowserRouter>
				<div>
				{/* <Route path = "/" exact component = {pageOne}/>
				<Route path = "/pageTwo" exact component = {pageTwo}/> *//*}
				<Header/>
				<Route path = "/" exact component = {StreamList}/>
				<Route path = "/streams/new" exact component = {StreamCreate}/>
				<Route path = "/streams/edit" exact component = {StreamEdit}/>
				<Route path = "/streams/delete" exact component = {StreamDelete}/>
				<Route path = "/streams/show" exact component = {StreamShow}/>
				
				</div>
			</BrowserRouter>
		</div>
		
		)
	}
} */

class App extends React.Component{
	render(){
		return (
		
		<div className = "ui container">
			<Router history = {history}>
				<div>
				{/* <Route path = "/" exact component = {pageOne}/>
				<Route path = "/pageTwo" exact component = {pageTwo}/> */}
				<Header/>
				<Switch>
					<Route path = "/" exact component = {StreamList}/>
					<Route path = "/streams/new" exact component = {StreamCreate}/>
					<Route path = "/streams/edit/:id" exact component = {StreamEdit}/>
					<Route path = "/streams/delete/:id" exact component = {StreamDelete}/>
					<Route path = "/streams/:id" exact component = {StreamShow}/>
				</Switch>
				
				</div>
			</Router>
		</div>
		
		)
	}
}

export default App;
