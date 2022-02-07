import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Logo = require('../../images/icon-left-font-monochrome-white.png')

function Navbar() {
    const [signIn, setSignIn] = useState(true);
    useEffect(()=>{
        setSignIn(localStorage.getItem('signIn'));
      
    },[localStorage.getItem('signIn')]);
   
    return (
       <nav className="navbar drop-shadow-xl bg-primary">
           <div className="container mx-auto">
               <div className="flex-none px-2 mx-2">
               <a href="/"> <img src={Logo} alt="" width={150} /></a>
               </div>
               <div className="flex-1 px-2 mx-2">
                   {signIn ? (
                       <div className="flex justify-end">
                        <Link to="/feeds" className='btn btn-ghost btn-sm rounded-btn'>Feeds</Link>
                        <Link to="/profile" className='btn btn-ghost btn-sm rounded-btn'>My Profile</Link>
                        <Link to="/signup" className='btn btn-ghost btn-sm rounded-btn' >logout</Link>
                    </div>
                    
                   ) : (
                    <div className="flex justify-end">
                       <Link to="user/login" className='btn btn-ghost btn-sm rounded-btn'>Log In</Link>
                       <Link to="user/signup" className='btn btn-ghost btn-sm rounded-btn'>Sign Up</Link>
                    </div>
                   )}    
               </div>
           </div>
       </nav>
    )} 


export default Navbar
