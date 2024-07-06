
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { userAuthContext } from './context/AuthContext'

function App() {
const {authUser} = userAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' exact element={authUser? <Home /> : <Navigate to={'/login'}/>}></Route>
        <Route path='/login' exact element={<Login/>}></Route>
        <Route path='/signup' exact element={authUser? <Navigate to={'/'}/>:<Signup/>}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
