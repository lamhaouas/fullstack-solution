import {faHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-6xl mb-8">404 - Page not found</h1>
                    <Link to='/' className='btn btn-lg'>
                        <faHome className='mr-2'/> Back To Home
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default NotFound
