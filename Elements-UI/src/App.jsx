// import logo from './logo.svg';
import {Outlet} from 'react-router-dom'
import './App.css';
// import Header from './components/header';
import Header from './components/header';
import  {Toaster} from 'react-hot-toast'
import Footer from './components/footer';
import { useEffect } from 'react';
import fetchUserDetails from './utils/fetchUserDetails';
import { setUserDetails} from './store/userSlice';
import { useDispatch } from 'react-redux';
function App() {

  const dispatch = useDispatch() 

  const fetchUser = async () =>{
    const userData = await fetchUserDetails();
    
    dispatch(setUserDetails(userData.data))
  }


  useEffect(()=>{
      fetchUser()
  })

  return (
   <>
   <Header/>
   <main className='min-h-[80vh]' >
      <Outlet/>
   </main>
   <Footer/>
   <Toaster/>
   </>
  );
}
export default App;
