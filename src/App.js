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
import Contact from './components/Contact/contact';
import Request from './components/Request/request';
import About from './components/About/about';
import Subscribe from './components/Payments/subscribe';
import NotFound from './components/Layout/NotFound/not_found';
import PaymentFail from './components/Payments/payment_fail';
import PaymentSuccess from './components/Payments/payment_success'

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/request' element={<Request />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />}/>
      <Route path='/subscribe' element={<Subscribe />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route path='/paymentfail' element={<PaymentFail/>} />
    </Routes>
    <Footer />
  </Router>
}

export default App;
