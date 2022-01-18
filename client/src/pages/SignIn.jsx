import { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();
  // register the user
  const logIn = () => {
    Axios.post("http://localhost:3000/user/login", {
      email: email,
      password: password,
    }).then((response) => {
    
    });
  }
    return (
    <div className=" card bg-base-200 m-2 p-4">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label> 
            <input type="text" placeholder="email" className="input input-bordered w-72" onChange={(event) =>{
            setEmail(event.target.value)
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
        <p className='text-error'>{errorMessage}</p>
     </div>
       
     
        
    )
}

export default SignIn
