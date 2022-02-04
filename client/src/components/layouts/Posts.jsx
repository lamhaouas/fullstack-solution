import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Posts() {
     // states
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:3001/posts")
  .then(response =>{
    setPosts(response.data);
    console.log(response)
  })
  .catch((err)=> console.log(err))
}, []);
const url = 'http://localhost:3001/';
  return <div>
       {posts.reverse().map((res, index)=>
        <div key={index}>
          <div className="card card-bordered shadow-sm bg-primary m-2 text-accent-content">
             <div  className="card-body">
               <img src={url + res.multimediaUrl} alt="post image" width={'450 px'} />
               <h2  className="card-title">By: @{res.username}</h2> 
               <p>{res.content}</p> 
             </div> 
             
             <div className="card-actions">
               <textarea placeholder="Comment here" className="textarea m-4 h-12 w-64 textarea-bordered"></textarea>
               <button className='btn m-4'>post</button>
            </div>
          </div>
        </div>
        )}
  </div>;
}

export default Posts;
