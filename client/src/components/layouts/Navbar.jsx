import {Link} from 'react-router-dom'
const Logo = require('../../images/icon-left-font-monochrome-white.png')

function Navbar() {
    return (
       <nav className="navbar drop-shadow-xl bg-primary">
           <div className="container mx-auto">
               <div className="flex-none px-2 mx-2">
               <a href="/"> <img src={Logo} alt="" width={150} /></a>
               </div>
               <div className="flex-1 px-2 mx-2">
                   <div className="flex justify-end">
                       <Link to="user/login" className='btn btn-ghost btn-sm rounded-btn'>Log In</Link>
                       <Link to="user/signup" className='btn btn-ghost btn-sm rounded-btn'>Sign Up</Link>

                   </div>
               </div>
           </div>
       </nav>
    )
}

export default Navbar
