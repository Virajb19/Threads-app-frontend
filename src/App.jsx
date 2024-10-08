import { useEffect } from 'react'
import Lenis from 'lenis'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import UserPage from './pages/UserPage'
import ForgotPassword from './pages/ForgotPassword'

export default function App(){
    
      useEffect(() => {
        const lenis = new Lenis({duration: 1.5, smooth: true, infinite: false})
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        } 
        requestAnimationFrame(raf)
        return () => lenis.destroy()
   }, [])

 return <main className="w-full bg-black">
    
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/:username' element={<UserPage />}/>
     </Routes>
   </BrowserRouter>

 </main>
}
