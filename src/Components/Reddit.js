import React, { useState, useEffect } from "react";
import axios from 'axios';

function Reddit() {

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => 
  {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
          console.log(newPosts);
          
        setPosts(newPosts);
        console.log(posts);

      });
  }, []);



  return (
    <div>
      <h1>react js</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );

}
export default Reddit;