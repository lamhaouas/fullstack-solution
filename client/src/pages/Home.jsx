import Welcome from '../components/layouts/Welcome'
import Feeds from '../components/layouts/Feeds';
import {useState, useEffect} from 'react'
function Home() {
  const [signIn, setSignIn] = useState('');
  useEffect(()=>{
    setSignIn(localStorage.getItem('signIn'))
},[localStorage.getItem('signIn')]);
   return (
     <div>
     {signIn ?(<Feeds/>) :
      (<Welcome/>)}
     </div>
    
    )
}

export default Home
