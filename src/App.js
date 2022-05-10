import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Review from './pages/Review/Review';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
