import React, {useState, useEffect} from 'react';
import axios from 'axios';
function Unread() {
    const [unread, setUnread] = useState([]);
    useEffect(() => {
        
        axios.get("http://localhost:3001/posts/unread")
        .then(response =>{
            for (let i = 0; i < response.length; i++) {
                console.log(response.data.unread)
              }
        })
        .catch((err)=> console.log(err))
      }, []);
  return (
    <div>
         {unread.reverse().map((res, index)=> 
         <div key={index}>{res.unread}</div> )
         }
    </div>
  )
}

export default Unread