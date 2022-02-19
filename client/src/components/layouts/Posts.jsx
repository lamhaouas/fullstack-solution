import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { FaThumbsUp} from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
function Posts() {
     // states
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState("");
  useEffect(() => {
  axios.get("http://localhost:3001/posts")
  .then(response =>{
    setPosts(response.data)
  })
  .catch((err)=> console.log(err))
}, []);
const url = 'http://localhost:3001/';
const username = localStorage.getItem('username')

//like post
  function likePost(id) {
    axios.post('http://localhost:3001/posts/like', { username: username, postId: id })
    .then(response => {
      console.log(response.data.message)
    
        setLiked(response.data.message);
   
      }).catch(error =>{
        
      })
  }
//delete a post
  const  deletePost = async (id, multimediaUrl,username) => {
    if (!window.confirm(`Are you sure you want to delete this post ?`))
        return;
     const data = {
       id: id,
       multimediaUrl : multimediaUrl,
       username: username
     }
     const config = {
      headers:{
        
        "Authorization":JSON.parse(window.localStorage.getItem('token')),
        
      },
    };
      try{
        await  axios.delete('http://localhost:3001/posts/delete',{data} , config)
        
      } catch(err){
        console.log(err)

      } 
     // window.location.reload();
    } 
  return <div>  
       {posts.reverse().map((res, index)=>
        <div key={index}>
          <div className="card card-bordered shadow-sm bg-primary m-2 w-96 text-accent-content">
            <figure className="px-10 pt-10 ">
                <img src={url + res.multimediaUrl} onError={(event) => event.target.style.display = 'none'}  alt="post image"  className='rounded-xl'/>
            </figure>
            <div  className="card-body">
              <div className='flex justify-between'>
                <button className='delete-button' onClick={()=>{deletePost(res.id,res.multimediaUrl, res.username)}} aria-label='delete button'><FaTrashAlt/></button>
                <h2 id='user' className="card-title text-black">By: @{res.username}</h2> 
              </div>
              <p className='m-5'>{res.content}</p> 
              <div className=' card-actions '>
                {!liked ? (
                  <div className='btn  m-5 ' onClick={()=>{likePost(res.id)}}>
                  <FaThumbsUp />
                  </div>

                ) : (
                  <div className='btn  m-5 '>
                    <FaHeart />
                 </div>
                ) }
              </div> 
            </div>
          </div>
        </div>
        )}
  </div>;
}

export default Posts;
