import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
function App() {
  return (
    <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar/>
       <main className='flex justify-center p-2'>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/*' element={<NotFound/>} />
           <Route path='/user/signup' element={<SignUp/>} />
           <Route path='/user/login' element={<SignIn/>} />
           <Route path='/profile' element={<Profile/>} />
         </Routes>
       </main>
       <Footer/>
     </div>
    </Router>
  );
}

export default App;
