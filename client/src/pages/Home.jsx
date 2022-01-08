import {Link} from 'react-router-dom'

function Home() {
    return (
        
    <div>
        <div className='card'>
          <h2 className='card-title text-4xl font-bold'>Welcome to Groupomania</h2> 
          <div className='card-action m-2'>
            <Link to="/signup" className="btn btn-secondary m-2">Get Started</Link> 
            <Link to="/signin" className="btn btn-ghost m-2">My Account</Link>
          </div>
        </div>
        
    </div> 
    )
}

export default Home
