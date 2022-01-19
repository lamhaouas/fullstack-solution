import { useState } from 'react';
import Axios from 'axios';

function SignUp() {
  //create email username and password states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage]= useState("")
  // register the user
  const signUp = () => {

    Axios.post("http://localhost:3000/user/signup", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
    if(response){
      console.log(response.data.message)
      setMessage(response.data.message)
    }
    });
  }

  return (
      
    <div className=" card bg-base-200 m-2 p-4">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" className="input w-72 input-bordered" onChange={(event) =>{
            setEmail(event.target.value)
          }}/>
      </div> 
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label> 
          <input type="text" placeholder="username" className='input w-72 input-bordered' onChange={(event) =>{
            setUsername(event.target.value)
          }}/>
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label> 
          <input type="password" placeholder="password" className="input w-72 input-bordered" onChange={(event) =>{
            setPassword(event.target.value)
          }}/>
      </div>
      <button  className="btn btn-secondary mt-6 w-72"  onClick={signUp}>Submit</button>
      <p className='p-2'>{message}</p> 
  </div>
    )
}

export default SignUp
