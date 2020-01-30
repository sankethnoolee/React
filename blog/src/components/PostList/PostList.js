import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchPostAndUsers} from '../actions';
import UserHeader from '../UserHeader/UserHeader';

class PostList extends React.Component{
	componentDidMount(){
		this.props.fetchPostAndUsers();
	}
	
	renderList(){
		return this.props.posts.map((post)=>{
			return (
				<div key = {post.id} className = "item">
					<i className = "large middle aligned icon user" />
					<div className = "content">
						<div className = "description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId = {post.userId}/>
					</div>
				</div>
			);
		});
	}
	
	render(){
		console.log(this.props.posts);
		return(
			<div className = "ui relaxed divided list">{this.renderList()}	</div>
		);
		
	}
	
}

const mapStateToProps = (state) =>{
	return {
		posts : state.posts
	}
}
export default connect(
mapStateToProps,
{fetchPostAndUsers : fetchPostAndUsers})(PostList);