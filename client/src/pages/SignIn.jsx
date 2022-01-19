import { useState } from 'react';
import Axios from 'axios';


function SignIn() {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[errorMessage , setErrorMessage] = useState("");
  // register the user
  const logIn = () => {
    Axios.post("http://localhost:3000/user/login", {
      email: email,
      password: password,
    }).then((response) => {
    if(response.data.signIn){
     localStorage.setItem('signIn', true);
     localStorage.setItem('token' , response.data.token)
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
        <p className='text-error p-2'>{errorMessage}</p>
     </div>
       
     
        
    )
}

export default SignIn
