import React, { useEffect, useState } from 'react';
// import './PostFetching.css';
import axios from 'axios';


function PostFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9292/create_posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
       })
    })
  return (
    <div>
      <ul>
        {
          posts.map((post) => <li key={ post.id }>{ }</li>)
        }
      </ul>
    </div>
  )
}

export default PostFetching

