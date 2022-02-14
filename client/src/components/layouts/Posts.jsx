import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { FaThumbsUp} from "react-icons/fa";
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
const username = localStorage.getItem('username')

//like post
// const likePost = (id) =>{
  
//   axios.post('http://localhost:3001/posts/like', { username: username , postId : id})
//   .then((res)=>{
//     console.log('post liked')
//   })
// }
//delete a post
const deletePost = (id) =>{
  if(username){
  if (!window.confirm(`Are you sure you want to delete this post ?`)) 
return
const config = {
  headers : {
    "Authorization": "Token " 
}
}
console.log(config)

  axios.delete('http://localhost:3001/posts/delete',{ data:{ id : id }}, config)
  window.location.reload()
} else {
 if (!window.confirm(`You can't delete this post`)) 
return }
}
  return <div>  
       {posts.reverse().map((res, index)=>
        <div key={index}>
          <div className="card card-bordered shadow-sm bg-primary m-2 text-accent-content">
            <figure className="px-10 pt-10 ">
                <img src={url + res.multimediaUrl} onError={(event) => event.target.style.display = 'none'}  alt="post image"  className='rounded-xl'/>
            </figure>
            <div  className="card-body">
              <div className='flex justify-between'>
                <button className='delete-button' onClick={()=>{deletePost(res.id)}} aria-label='delete button'><FaTrashAlt/></button>
                <h2 id='user' className="card-title text-white">{res.username}</h2> 
              </div>
              <p className='m-5'>{res.content}</p> 
              <div className=' card-actions '>
                 
                 <div className='btn  m-5 ' id='like-button'>
                    <FaThumbsUp />
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
