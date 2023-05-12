import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/home';
import Header from './components/Layout/Header/header';
import Footer from './components/Layout/Footer/Footer.jsx';
import Courses from './components/Courses/courses';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />}/>
    </Routes>
    <Footer />
  </Router>
}

export default App;
