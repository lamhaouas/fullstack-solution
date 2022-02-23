import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Posts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(response =>{
    setPosts(response.data)
    })
    .catch((err)=> console.log(err)) }, []);

  const url = 'http://localhost:3001/';

//like post

  function likePost(id,username) {
    const data = {
      username: username,
      postId: id
    }
    axios.post('http://localhost:3001/posts/like/:'+ `${id}`, data )
    .then(response => {
      console.log(response.data.message)
    })
    .catch(error =>{
      console.log(error)})
  }


//delete a post
  function  deletePost(id, multimediaUrl,username) {
    if (!window.confirm(`Are you sure you want to delete this post ?`))
        return;
   
     const config = {
      headers:{
        
        "Authorization":JSON.parse(window.localStorage.getItem('token')),
        'Content-Type': 'application/json'
      },
      data:{
        id: id,
        multimediaUrl : multimediaUrl,
        username: username
      }
    };
      axios.delete('http://localhost:3001/posts/delete/:'+ `${id}` ,config)
      .then(res=>{console.log(res.data.message)})
      .catch(err=>{ console.log(err)})
   
    window.location.reload();
    } 
    // read posts
    function readPost(id,username) {
      const data = {
        username: username,
        postId: id
      }
    axios.post('http://localhost:3001/posts/unread/:'+ `${id}`, data )
      .then(response => {
        console.log(response)
      })
    .catch(error =>{
        console.log(error)})

    }
  return <div> 
   
       {posts.reverse().map((res, index)=>
       
        <div key={index}>
          <div  onClick={()=>{readPost(res.id, res.username)}} className="card card-bordered shadow-sm  m-2 w-96 text-accent-content">
           
         
            <figure className="px-10 pt-10 ">
                <img src={url + res.multimediaUrl} onError={(event) => event.target.style.display = 'none'}  alt="post image"  className='rounded-xl'/>
            </figure>
            <div  className="card-body">
              <div className='flex justify-between'>
                <button className='delete-button' onClick={()=>{deletePost(res.id,res.multimediaUrl)}} aria-label='delete button'><FaTrashAlt/></button>
                <h2 id='user' className="card-title text-black">By: @{res.username}</h2> 
              </div>
              <p className='m-5'>{res.content}</p> 
              <div className=' card-actions '>
                 <div>  {res.status}
                 </div>
                  <div className='btn  m-5 ' onClick={()=>{likePost(res.id, res.username)}}>
                  <FaHeart />
                  
                  {res.likes}
                  </div>

              
              </div> 
            </div>
          </div>
        </div>
        )}
  </div>;
}

export default Posts;
