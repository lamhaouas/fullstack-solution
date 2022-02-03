import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'

function SignIn() {
  // states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[errorMessage , setErrorMessage] = useState("");
  let navigate = useNavigate()
  // register the user
  const logIn = () => {
    
    navigate('/feeds');
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
    if(response.data.signIn){
     localStorage.setItem('signIn', true);
     localStorage.setItem('token' , response.data.token)
     localStorage.setItem('username', response.data.username)
     
    } else{
      console.log(response.data.message);
      setErrorMessage(response.data.message)
    }
    });
  }
    return (
    <div className=" card bg-base-200 m-2 p-4">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label> 
            <input type="text" placeholder="username" className="input input-bordered w-72" onChange={(event) =>{
            setUsername(event.target.value)
          }}/>
        </div> 
        <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label> 
            <input type="password" placeholder="password" className="input input-bordered w-72" onChange={(event) =>{
            setPassword(event.target.value)
          }}/>
        </div>
        <button className="btn btn-secondary mt-6 w-72"  onClick={logIn}>Submit</button>
        <p className='text-error p-2'>{errorMessage}</p>
     </div>
       
     
        
    )
}

export default SignIn
