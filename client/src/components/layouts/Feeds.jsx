import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

function Feeds() {
  // states
  const [posts, setPosts] = useState([]);
  const [file, setFile]= useState();
  const [content, setContent]= useState();

  useEffect(() => {
  axios.get("http://localhost:3001/posts")
  .then(response =>{
    setPosts(response.data);
  })
  .catch((err)=> console.log(err))
}, []);
  return (
<>
  <div>
    <div>
      <div className='card w-full '>
        <div className="card-body">
          <h2 className="card-title">Create a post</h2>
          <input type="text" placeholder="Type here" className="textarea m-2 h-12 textarea-bordered" onChange={e =>{
            const{ value } = e.target;
            setContent(value)
          }}></input>
          <label htmlFor='image'>Select image: </label>
           <input className='text-secondary' type="file"  accept=".jpeg" onChange={e=>{
             const file = e.target.files[0];
             setFile(file)
           }}/>
          <div className="card-actions">
           <button className="btn btn-primary" >Create</button>
          </div>
        </div>
      </div>
   </div>
      {/* display posts  */ }

        {posts.map((res, index)=>
        <div key={index}>
          <div className="card card-bordered w-full shadow-sm bg-primary m-2 text-accent-content">
             <div  className="card-body">
               <img src="https://picsum.photos/id/1005/200/200" alt="" />
               <h2  className="card-title">By: @{res.username}</h2> 
               <p>{res.content}</p> 
               <button className='m-2'><FaRegThumbsUp/></button>
             </div> 
             
             <div className="card-actions">
               <textarea placeholder="Comment here" className="textarea m-4 h-12 w-64 textarea-bordered"></textarea>
               <button className='btn m-4'>post</button>
            </div>
          </div>
        </div>
        )}
      
    </div>
    </>
  );
 
}

export default Feeds;
