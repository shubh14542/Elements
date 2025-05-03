// import logo from './logo.svg';
import {Outlet} from 'react-router-dom'
import './App.css';
// import Header from './components/header';
import Header1 from './components/header1';
import toast, {Toaster} from 'react-hot-toast'
import Footer1 from './components/footer1';
function App() {
  return (
   <>
   <Header1/>
   <main className='min-h-[80vh]' >
      <Outlet/>
   </main>
   <Footer1/>
   <Toaster/>
   </>
  );
}


export default App;
