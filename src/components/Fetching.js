import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Fetching.css";



function Fetching() {
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
          posts.map((post) => <li key={ post.id }>{
            <div className="Each_Post_Layout">
              <h2 className= "Titles">{post.title}</h2>
              <p>{ post.body }</p> 
              <div className="Each_Post_Lower_Section">
                <button>Comment</button>
              </div>              
            </div>            
          }</li>)
        }
      </ul>
    </div>
  )
}

export default Fetching
