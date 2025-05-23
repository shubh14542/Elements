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
import Profile from '../pages/Profile'
import Dashboard from '../layout/Dashboard'
import Bookings from '../pages/Bookings'
import Addresses from '../pages/Addresses'
import Slots from '../pages/Slots'
import Admin from '../pages/Admin'
// import AdminPermission from '../components/AdminPermission'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Category from '../pages/Category'
import Device from '../pages/Device' 
import SubCategory from '../pages/SubCategory'
import UploadDevice from '../pages/UploadDevice'
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
        },
        {
            path : '/menu',
            element : <Menu/>
        },
        {
            path : '/about',
            element : <About/>
        },
        {
            path : '/contact',
            element : <Contact/>
        },
    ]
   },
        {
            path : 'dashboard',
            element : <Dashboard/>,
            children : [
                {
                    path : 'profile', 
                    element :<Profile/>
                },
                {
                    path : 'bookings',
                    element :<Bookings/>
                },
                {
                    path : 'addresses',
                    element : <Addresses/>
                },
                {
                    path : 'slots',
                    element :<Slots/>
                },
                {
                    path : 'admin-panel',
                    element : <Admin/>
                },
                {
                    path : 'category',
                    element : <Category/>
                },
                {
                    path : 'subcategory',
                    element : <SubCategory/>
                },
                {
                    path : 'device',
                    element : <Device/>
                },
                {
                    path: 'upload-device',
                    element: <UploadDevice/>
                }
               
            ]
        }
   
])

export default router