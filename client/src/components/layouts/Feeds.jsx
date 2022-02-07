import Create from './CreatePost';
import Posts from './Posts';
import { useNavigate } from 'react-router-dom'
import SignIn from '../../pages/SignIn';
function Feeds() {
  

  return (
    <>
      <div>
        <Create/>
    
        <Posts/>
    
      </div>
    </>
      
     
  )
  }


export default Feeds;
