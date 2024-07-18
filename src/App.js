import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="h-screen">
        <div className='bg-slate-900'>
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/faq' element={<Faq/>}/>
        </Routes> 

        <div className='bg-slate-900'>
          <Footer/>
        </div>
      
    </div>
  );
}

export default App;
