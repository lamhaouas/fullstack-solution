import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import Create from './CreatePost';
function Feeds() {
  // states
  const [posts, setPosts] = useState([]);

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
    <Create/>
      {/* display posts  */ }

        {posts.map((res, index)=>
        <div key={index}>
          <div className="card card-bordered shadow-sm bg-primary m-2 text-accent-content">
             <div  className="card-body">
               <img src={res.multimediaUrl} alt="post image" />
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
      
    </div>
    </>
  );
 
}

export default Feeds;
