import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [likes,setLikes] = useState(0)
  const [seenposts, setSeenPosts] = useState(null);
  const [seenresult, setSeenResult] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(response =>{
    
    setPosts(response.data)
    
    })
    .catch((err)=> console.log(err)) },[likes, seenposts])
  
  

  const url = 'http://localhost:3001/';

//like post

  function likePost(id) {
    const data = {
      username: localStorage.getItem('username'),
      postId: id
    }
    axios.post('http://localhost:3001/posts/like/:'+ `${id}`, data)
    
    .then(response => {
      console.log(response.data.message)
      setLikes(response)
      
    })
    .catch(error =>{
      console.log(error)})
      
  }


  
  
//delete a post
  function  deletePost(id,multimediaUrl) {
    // if (!window.confirm(`Are you sure you want to delete this post ?`))
    //     return;
   
     const config = {
      headers:{
        
        "Authorization":JSON.parse(window.localStorage.getItem('token')),
        'Content-Type': 'application/json'
      },
      data:{
        id: id,
        username: localStorage.getItem('username'),
        multimediaUrl: multimediaUrl,
      }
    };
      axios.delete('http://localhost:3001/posts/delete/:'+ `${id}` ,config)
      .then(res=>{console.log(res.data.message)
       window.alert(res.data.message)
      })
      .catch(err=>{ console.log(err)})
      
      window.location.reload()
   
    } 
    // seen posts
    function readPost(id) {
      const data = {
        username: localStorage.getItem('username'),
        postId: id
      }
    axios.post('http://localhost:3001/posts/:'+ `${id}`, data )
      .then(response => {
        console.log(response)
      })
    .catch(error =>{
        console.log(error)})

    }
    // useen posts
    function unseenPost(id){
      
      axios.get('http://localhost:3001/posts/unseen',{ params:{
        username: localStorage.getItem('username'),
        postId: id
      }})
      .then(response => {
        console.log(response.data.message)
        setSeenPosts(response.data.message)
      })
    .catch(error =>{
        console.log(error)})
    }
   
  return <div> 
      <input type="checkbox" id="my-modal" class="modal-toggle "/>
<div class="modal ">
  <div class="modal-box bg-primary">{seenposts? (<h3 class="font-bold text-lg">{seenposts}</h3>):(
    <h3 class="font-bold text-lg">No</h3>
  )}
    
    <div class="modal-action">
      <label for="my-modal" class="btn">Ok</label>
    </div>
  </div>
</div>
       {posts.reverse().map((res, index)=>
  
        <div key={index} >
          <div onClick={()=>{readPost(res.id, res.username)}} className="card card-bordered shadow-sm  m-2 w-96 text-accent-content">
            <figure className="px-10 pt-10 ">
                <img onMouseOver={()=>{unseenPost(res.id)}} src={url + res.multimediaUrl} onError={(event) => event.target.style.display = 'none'}  alt="post image"  className='rounded-xl'/>
            </figure>
            <label for="my-modal" class="btn modal-button"> Did i see this post?</label>

           
            <div  className="card-body">
              <div className='flex justify-between'>
                <button className='delete-button' onClick={()=>{deletePost(res.id,res.multimediaUrl)}} aria-label='delete button'><FaTrashAlt/></button>
                <h2 id='user' className="card-title text-black">By: @{res.username}</h2> 
              </div>
              <p className='m-5'>{res.content}</p> 
              <div className=' card-actions '>
                 <div>  
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

export default Posts 