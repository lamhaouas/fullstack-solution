import React, {useState, useEffect} from 'react';
import axios from 'axios';
function Unread() {
   
  return (
    <div>
         <div class="btn-group flex justify-center m-5">
          
               <button class="btn btn-active">All posts</button>
               <button class="btn">Unread posts</button>
         </div>
    </div>
  )
}

export default Unread