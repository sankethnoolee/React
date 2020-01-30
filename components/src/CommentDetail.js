import React from 'react';

const CommentDetail = (props) => {
	
	return (
		<div className = "comment">
			<a href = "/" className = "avatar">
				<img alt = "avatar"/>
		
			</a>
		
		<div className = "content">
			<a href = "/" className = "author">
				{props.author}
			</a>
			<div className = "metadata">
				<span className = "date"> {props.time}</span>
			</div>
			<div className = "text">Its time to REACT.</div>
		</div>
		
		</div>
		
		
	
	);
	
}


export default CommentDetail;