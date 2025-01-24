import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'

const App = () => {
  const {authUser , checkAuth , isCheckingAuth} = useAuthStore();

  useEffect(() =>{
    checkAuth();
  } , [checkAuth])

  console.log({authUser} , "authUser");

  if(isCheckingAuth && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ="/" element = {<HomePage/>} />
        <Route path ="/signup" element = {<SignUpPage/>} />
        <Route path ="/login" element = {<LoginPage/>} />
        <Route path ="/setting" element = {<SettingPage/>} />
        <Route path ="/profile" element = {<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App