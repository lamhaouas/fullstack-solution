import Create from './CreatePost';
import Posts from './Posts';
import { useState, useEffect } from 'react';


import { useNavigate } from 'react-router-dom'
import SignIn from '../../pages/SignIn';
import Unread from './Unread';
function Feeds() {
  let navigate = useNavigate()

  const [signIn, setSignIn] = useState();
 
  useEffect(()=>{
    setSignIn(localStorage.getItem('signIn'));
navigate('/feeds')
},[localStorage.getItem('signIn')]);

  return (
  <>
    {signIn ? (
       <div>
           <div >
             <Unread/>
             

             <Create/>
          
            </div>
           <Posts/>
        </div>
    ) : (
      <SignIn/>
     
    )
   }
    </>
   )
  }


export default Feeds;
