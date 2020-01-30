import './season.css';
import React from 'react';



const seasonConfig = {
	winter : {
		text : "Burr... It's chilly",
		icon : "snowflake"
	},
	summer : {
		text : "Lets hit the beach",
		icon : "sun"
	}
}


const getSeason = (lat,month)=>{
	if(month > 2 && month < 9){
		return lat>0?'summer' : 'winter';
	}else{
		return lat>0?'winter' : 'summer';
	}
}


class Season extends React.Component{
	
	render(){
		const season = getSeason(this.props.lat,new Date().getMonth());
		/* const text = season==='winter'?'Burr... It\'s chilly':'Lets hit the beach';
		const icon = season==='winter'?'snowflake':'sun' */
		
		const {text , icon} = seasonConfig[season];
		return (
			
			<div className = {`season-display ${season}`}>
			<i className = {`${icon} massive icon icon-left`}/>
				<h1>{text}</h1>
			<i className = {`${icon} massive icon icon-right`}/>
			</div>
			
		)
		
	}
	
	
}


export default Season;

