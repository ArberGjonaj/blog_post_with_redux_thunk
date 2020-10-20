import React from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {

   componentDidMount(){
       this.props.fetchPostsAndUsers();
     
   
    }
    renderList(){
    return this.props.posts.map(posts=>{
      return (
          <div  className={"item"} key={posts.id}>
            <i className={"large middle aligned icon user"}/>
            <div className={"content"}>
              <div className={"description"}>
               <h2>{posts.title}</h2>
               <p>{posts.body}</p>
               <UserHeader userId={posts.userId}/>
              </div>
            </div>
          </div>
      )
    })
    }

  render() {
console.log(this.props.posts)
    return (

    <div className={"ui relaxed divided list"}>
        {this.renderList()}
    </div>
      
    )
  }
}

const mapStateToProps=(state)=>{
  return {posts:state.posts} ;
  }

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
