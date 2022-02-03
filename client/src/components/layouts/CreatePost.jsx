import React, {useState} from 'react';
import axios from 'axios';


function Create () {
    // states
const[content, setContent] = useState({});
const[file, setFile] = useState()

const upload = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('multimediaUrl', file);
  formData.append('username', window.localStorage.getItem('username'));
  formData.append('content', content);
  const config = {
    headers:{
      'content-type': 'multipart/form-data',
    },
  };
try {
const res = await axios.post('http://localhost:3001/posts',formData, config);
   console.log(res);
 
 } catch (err) {
 console.log(err)

}
}
  return <div>

      <div className='card w-full '>
        <div className="card-body">
          <label className="card-title">Create a post</label>
          <input type="text" placeholder="Type here" className="textarea m-2 h-12 textarea-bordered"
          onChange={event=> {
            const {value} = event.target;
            setContent(value);
          }}
          ></input>
          <label htmlFor='image'>Select image: </label>
           <input className='text-secondary' type="file" name='file' accept=".jpg,.png" onChange={event => {
            const file = event.target.files[0];
            setFile(file);
          }}></input>
          <div className="card-actions">
           <button className="btn btn-primary" type='submit' onClick={upload} >Create</button>
          </div>
        </div>
      </div>
   </div>
  ;
}

export default Create;
