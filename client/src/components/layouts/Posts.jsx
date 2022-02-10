import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
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
// delete a post
const deletePost = () =>{
  const user = document.getElementsByClassName('card-title')
  if(localStorage.getItem('username') === user){
  if (!window.confirm(`Are you sure you want to delete this post ?`)) 
return
  const username = localStorage.getItem('username')
  axios.delete(`http://localhost:3001/posts/delete/${username}`,{ data: { username: username } })
} else {
 if (!window.confirm(`You can't delete this post`)) 
return }
}
  return <div>
    
       {posts.reverse().map((res, index)=>
        <div key={index}>
          <div className="card card-bordered shadow-sm bg-primary m-2 text-accent-content">
            <div  className="card-body">
              <div className='flex justify-between'>
                <button className='delete-button' onClick={()=>{deletePost()}}><FaTrashAlt/></button>
                <h2  className="card-title text-white">By: @{res.username}</h2> 
              </div>
              <img src={url + res.multimediaUrl} onError={(event) => event.target.style.display = 'none'}  alt="post" width={'450 px'} className='rounded-xl'/>
              <p>{res.content}</p> 
            </div> 
          </div>
        </div>
        )}
  </div>;
}

export default Posts;
