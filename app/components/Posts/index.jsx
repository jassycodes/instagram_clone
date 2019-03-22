import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

console.log("Posts Component");

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "Halooooo this is my post"
    }

    // this.state = {
    //   this.props.post = "Halooooo"
    // }

  }




  render() {
    return( 
      <div>
         <h1>Posts</h1>
         <Post post={post}/>
       </div>
    )
 
    // <Post post={post}/></div>
  
  }
}

module.exports = Posts;
