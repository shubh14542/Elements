import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login' 
import Home from '../pages/Home'
import App from '../App'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import OtpVerification from '../pages/OtpVerification'
import ResetPassword from '../pages/ResetPassword'
import UserMenuPage from '../pages/UserMenuPage'
// import Signup from '../pages/Signup'
const router =  createBrowserRouter([
   {
    path : "/",
    element : <App/>,
    children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/login',
            element : <Login/>
        },
        {
            path : '/register',
            element : <Register/>
        },
        {
            path : '/forgot-password',
            element : <ForgotPassword/>
        },
        {
            path : '/otp-verification',
            element : <OtpVerification/>
        },
        {
            path : '/reset-password',
            element : <ResetPassword/>
        },
        {
            path : '/user-mobile',
            element : <UserMenuPage/>
        }
       
    ]
   }
])

export default router