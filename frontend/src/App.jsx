import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/signUp.jsx';
import Home from './pages/home/Home'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
  <Routes> 

    <Route path='/' element= {<Home/>}/>
    <Route path='/Login' element= {<Login/>}/>
    <Route path='/Signup' element= {<SignUp/>}/>

   </Routes>
   <Toaster/>
    </div>
  );
}

export default App;

