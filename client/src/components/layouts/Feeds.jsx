import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import Create from './CreatePost';
import Posts from './Posts';
function Feeds() {

  return (
<>
  <div>
    <Create/>
    <Posts/>

  </div>
</>
  );
 
}

export default Feeds;
