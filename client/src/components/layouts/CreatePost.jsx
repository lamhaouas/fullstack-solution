import React, {useState} from 'react';
import axios from 'axios';


function Create () {

    // states
const[content, setContent] = useState("");
const[file, setFile] = useState([])

const upload = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('multimediaUrl', file);
  formData.append('username', window.localStorage.getItem('username'));
  formData.append('content', content);
 
  const config = {
    headers:{
    
      'Authorization': JSON.parse(window.localStorage.getItem('token')),
      'Content-Type': 'application/json'
    },
  };
 try {
   await axios.post('http://localhost:3001/posts',formData, config);
   }
  catch (err)
     {
    console.log(err)
  }
  window.location.reload()
}
  return <div>

      <div className='card border-2 bg-base-200'>
        <div className="card-body">
          <label className="card-title">Create a post
          <input type="text"  placeholder="Type here" className="textarea m-2 textarea-bordered"
          onChange={event=> {
            const {value} = event.target;
            setContent(value);
          }}
          ></input>
          </label>
          <label  htmlFor='image'>
           <input className='text-secondary' type="file" name='file' accept=".jpg,.png,.gif" onChange={event => {
            const file = event.target.files[0];
            setFile(file);
          }} />
          </label>
          <div className="card-actions">
           <button className="btn btn-primary" type='submit' onClick={upload} aria-label='creat post'>Create</button>
          </div>
        </div>
      </div>
   </div>
  ;
}

export default Create;
